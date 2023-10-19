//  load packages and models
const { Coach } = require('../models/Coach')
const { Review } = require('../models/Review')
//  API's

//  add coach
exports.coach_add_post = (req, res) => {
  let coach = new Coach(req.body)
  coach
    .save()
    .then(() => {
      console.log('saved coach')
      res.json({
        good: true
      })
    })
    .catch((err) => {
      console.log((err) => {
        console.log('couldnt save coach to DB error: ' + err)
      })
    })
}

//  get coachs
exports.coach_show_get = (req, res) => {
  Coach.find()
    .populate('reviews')
    .then((coachs) => {
      res.json(coachs)
    })
    .catch((err) => {
      console.log('coulnt get coachs, error: ' + err)
    })
}
