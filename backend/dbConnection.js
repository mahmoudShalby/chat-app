const { connect, connection } = require('mongoose')

const DATABASE_URL = 'mongodb://localhost/chat-app'

connect(DATABASE_URL)

connection.on('error', err => console.error('Database connection error:', err))
