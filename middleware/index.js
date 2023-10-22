const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = process.env.APP_SECRET

const hashPassword = async (password) => {
  let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
  //This creates a hashed password using salt, salt rounds is determined in .env file
  console.log(password)
  return hashedPassword
}

const comparePassword = async (storedPassword, password) => {
  //This compares the storedPassword with the password a client provides when logging in
  let matchedPassword = await bcrypt.compare(password, storedPassword)
  return matchedPassword
}

const createToken = (payload) => {
  let token = jwt.sign(payload, APP_SECRET) // generates an encrypted token using APP_SECRET
  return token
}

const verifyToken = (req, res, next) => {
  const { token } = res.locals //stores token in request lifecycle state

  try {
    let payload = jwt.verify(token, APP_SECRET) //Checks if the token exists
    console.log('HHHHHHHHHHHHHHHH', payload)

    if (payload) {
      res.locals.payload = payload
      return next()
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized User' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'Verify Token Error' })
  }
}

const stripToken = (req, res, next) => {
  try {
    console.log(req.headers['authorization'])
    const token = req.headers['authorization'].split(' ')[1] // splits the value and grabs [1], which is the token

    if (token) {
      res.locals.token = token // if the token is there, it will be added inside the request lifecycle state
      return next()
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized User' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'Strip Token Error' })
  }
}

module.exports = {
  hashPassword,
  comparePassword,
  createToken,
  verifyToken,
  stripToken
}
