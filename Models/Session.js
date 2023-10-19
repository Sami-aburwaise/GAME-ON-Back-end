const mongoose = require('mongoose')

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
    }
  },
  { timestamps: true }
)

const User = mongoose.model('User', sessionSchema)

module.exports = { Session }
