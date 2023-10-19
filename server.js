//  load packages
const express = require('express')
const moongose = require('mongoose')
require('dotenv').config()

//  invoke exporess
const app = express()

//  use body-parser middleware
app.use(express.json())

//  import routes
const reviewRouter = require('./routes/review')
const coachRouter = require('./routes/coach')

//  use routes
app.use('/', reviewRouter)
app.use('/', coachRouter)

//listen to port
const port = process.env.PORT
app.listen(port, () => {
  console.log('listen to port ' + port)
})

//connect to mongoDB
moongose
  .connect(process.env.MONGODBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('connected to mongoDB, good')
  })
  .catch((err) => {
    console.log('not good, error: ' + err)
  })
