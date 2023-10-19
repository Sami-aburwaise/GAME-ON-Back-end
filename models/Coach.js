const moongose = require('mongoose')

const coachSchema = new moongose.Schema({
  name: String,
  profile_image: String,
  description: String,
  price: Number,
  games: [String],
  reviews: [{ type: moongose.Schema.Types.ObjectId, ref: 'Review' }]
})

const Coach = moongose.model('Coach', coachSchema)

module.exports = { Coach }
