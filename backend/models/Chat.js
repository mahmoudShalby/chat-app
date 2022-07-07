const { model, Schema } = require('mongoose')

module.exports = model('Chat', new Schema({
  firstUser: { type: Schema.Types.ObjectId, ref: 'User', required: true},
  secondUser: { type: Schema.Types.ObjectId, ref: 'User', required: true},
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
}))
