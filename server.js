//  load packages
const express = require('express')
const moongose = require('mongoose')
require('dotenv').config()
const logger = require('morgan')
const AuthRouter = require('./routers/AuthRouter')

//  invoke exporess
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', AuthRouter)
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
