const { model, Schema } = require('mongoose')

module.exports = model('Message', new Schema({
  content: { type: String, required: true },
  sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  chat: { type: Schema.Types.ObjectId, ref: 'Chat', required: true },
}, { timestamps: true }))
