const moongose = require('mongoose')

const reviewSchema = new moongose.Schema(
  {
    comment: {
      type: String,
      maxlength: [100]
    },
    rating: Number

    /*     user: {
      type: moongose.Schema.Types.ObjectId,
      ref: 'User'
    },
    coach: {
      type: moongose.Schema.Types.ObjectId,
      ref: 'Coach'
    } */
  },
  {
    timestamps: true
  }
)

const Review = moongose.model('Review', reviewSchema)

module.exports = { Review }
