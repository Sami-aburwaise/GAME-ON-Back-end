const moongose = require('mongoose')

const coachSchema = new moongose.Schema(
  {
    name: String,
    profile_image: String,
    description: String,
    price: Number,
    Games: [String]
  },
  {
    timestamps: true
  }
)

const Coach = mongoose.model('Coach', coachSchema)

module.exports = { Coach }
