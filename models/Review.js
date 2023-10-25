const moongose = require('mongoose')
const { User } = require('../Models/User')
const { Coach } = require('../models/Coach')

const reviewSchema = new moongose.Schema(
  {
    comment: {
      type: String,
      required: true,
      maxlength: [100]
    },
    rating: { type: Number, required: true },
    user: {
      type: moongose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
)

const Review = moongose.model('Review', reviewSchema)

module.exports = { Review }
