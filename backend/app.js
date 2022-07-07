require('./dbConnection')
const express = require('express')
const app = express()
const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// Import models
const User = require('./models/User')
const Chat = require('./models/Chat')
const Message = require('./models/Message')

// JWT system of Authentication
const SECRET_KEY = '5g5OytzJ4BBXLY/as7L6Eg=='
const generateJwtToken = data => jwt.sign(data, SECRET_KEY)
const verifyJwtToken = token => jwt.verify(token, SECRET_KEY)

// Password hashing system
const hashPassword = password => bcrypt.hashSync(password, 10)
const comparePassword = (newPassword, hashedPassword) => bcrypt.compareSync(newPassword, hashedPassword)

// Socket.io server
io.on('connection', socket => {
  // Authentication
  let username
  socket.on('auth token', async token => {
    console.log('token:', token)
    if (token) {
      username = verifyJwtToken(token).username
      console.log('username:', username)
      console.log('token:', verifyJwtToken(token))
      const user = await User.findOne({ username })
      if (!user) {
        socket.emit('data', null, null, null)
        return
      }
      user.socketId = socket.id
      user.save()
      const chats = await Chat.find({
        $or: [{ firstUser: user._id }, { secondUser: user._id }]
      }).populate('firstUser', 'name socketId').populate('secondUser', 'name socketId')
      socket.emit('data', username, chats, socket.id)
    }
    else
      socket.emit('data', null, null, null)
  })

  socket.on('sign up', async (sentUsername, sentPassword) => {
    let user = await User.findOne({ username: sentUsername })
    console.log('found user:', user)
    if (user) {
      socket.emit('wrong sign up')
      return
    }
    console.log(sentPassword)
    user = User.create({ username: sentUsername, password: hashPassword(sentPassword) })
    socket.emit('set auth token', generateJwtToken({ username: sentUsername }))
  })

  socket.on('sign in', async (sentUsername, sentPassword) => {
    const user = await User.findOne({ username: sentUsername })
    if (!user || !comparePassword(sentPassword, user.password)) {
      socket.emit('wrong sign in')
      return
    }
    socket.emit('set auth token', generateJwtToken({ username: sentUsername }))
  })

  // Chats
  socket.on('search chats', async searchValue => {
    if (searchValue)
      socket.emit('search result',
        (await User.find({
          username: RegExp(searchValue)
        }).populate('username socketId'))
        .filter(user => user.username !== username)
      )
    else
      socket.emit('search result', [])
  })

  socket.on('create chat', async anotherUsername => {
    const user = await User.findOne({ username })
    const anotherUser = await User.findOne({ anotherUsername })
    if (!user || !anotherUser) {
      socket.emit('chat created', null)
      return
    }
    const chat = await new Chat({ firstUser: user._id, secondUser: anotherUser._id }).populate('secondUser', 'username socketId')
    console.log(chat)
    socket.emit('chat created', chat)
  })
})

// Serve
httpServer.listen(5000)
