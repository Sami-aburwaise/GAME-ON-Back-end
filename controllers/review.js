//  load packages and models
const { Coach } = require('../models/Coach')
const { Review } = require('../models/Review')
//  API's

//  add review
exports.review_add_post = (req, res) => {
  Coach.findById(req.query.coach_id)
    .then((coach) => {
      let review = new Review(req.body)
      review
        .save()
        .then(() => {
          console.log('saved review')
          coach
            .updateOne({ $push: { reviews: review } })
            .then(() => {
              res.send({
                good: true
              })
            })
            .catch((err) => {
              console.log('couldnt add review, error: ' + err)
            })
        })
        .catch((err) => {
          console.log((err) => {
            console.log('couldnt save review to DB error: ' + err)
          })
        })
    })
    .catch((err) => {
      console.log('couldnt get coach error' + err)
    })
}

//  delete review
exports.review_delete_get = (req, res) => {
  let review = Review.findById(req.query.review_id)
  //check if user can do that
  if (false) {
    return
  }
  review
    .deleteOne()
    .then(() => {
      res.send({
        good: true
      })
    })
    .catch((err) => {
      console.log('couldnt find review, error: ' + err)
    })
}

//  edit review
exports.review_update_post = (req, res) => {
  let review = Review.findById(req.query.review_id)
  //check if user can do that
  if (false) {
    return
  }
  review
    .updateOne(req.body)
    .then(() => {
      console.log('review updated')
      res.send({
        good: true
      })
    })
    .catch((err) => {
      console.log('couldnt edit review, error:' + err)
    })
}
