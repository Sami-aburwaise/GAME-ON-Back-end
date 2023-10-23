const mongoose = require('mongoose')
const { User } = require('../Models/User')
const sessionSchema = mongoose.Schema(
  {
    game: {
      type: String,
      required: true
    },

    date: {
      type: Date,
      required: true
    },
    sessionType: {
      type: String,
      required: true
    },

    coach: {
      type: String,
      required: true
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
)

const Session = mongoose.model('Session', sessionSchema)

module.exports = { Session }
