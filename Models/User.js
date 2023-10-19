const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },

    lastName: {
      type: String,
      required: true
    },

    age: {
      type: Number,
      required: true
    },
    discordAccount: {
      type: String,
      required: true
    },

    emailAddress: {
      type: String,
      required: true
    },
    passwordDigest: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

const Session = mongoose.model('User', userSchema)

module.exports = { User }
