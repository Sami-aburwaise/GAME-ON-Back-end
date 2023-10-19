//  load packages and models
const { Review } = require('../models/Review')
//  API's

//  add review
exports.review_add_post = (req, res) => {
  let review = new Review(req.body)
  console.log(req.body)
  review
    .save()
    .then(() => {
      console.log('saved review')
      res.json({
        good: true
      })
    })
    .catch((err) => {
      console.log((err) => {
        console.log('couldnt save review to DB error: ' + err)
      })
    })
}

//  get reviews
exports.review_show_get = (req, res) => {
  Review.find(/* coach id here */)
    .then((reviews) => {
      res.json(reviews)
    })
    .catch((err) => {
      console.log('coulnt get reviews, error: ' + err)
    })
}
