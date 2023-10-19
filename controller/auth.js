const { User } = require('../Models/User')
const middleware = require('../middleware')

const signUp = async (req, res) => {
  try {
    const { firstName, lastName, age, discordAccount, emailAddress, password } =
      req.body

    let passwordDigest = await middleware.hashPassword(password) //This will hash the users password
    let existingUser = await User.findOne({ emailAddress }) //This will search one email in the database.
    if (existingUser) {
      return res.status(400).send('user already exists') //Users will not be able to signup with the same email
    } else {
      const user = await User.create({
        // Creates new user
        firstName,
        lastName,
        age,
        discordAccount,
        emailAddress,
        passwordDigest
      })
      res.send(user)
    }
  } catch (error) {
    console.log(error)
  }
}

const signIn = async (req, res) => {
  const { emailAddress, password } = req.body
  try {
    const user = await User.findOne({ emailAddress }) //Looks for email if it exists

    let passwordMatch = await middleware.comparePassword(
      // Checks if Password matches the password digest thats in the Database
      user.passwordDigest,
      password
    )
    if (passwordMatch) {
      let payload = {
        id: user.id,
        emailAddress: user.emailAddress
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'User Unauthorized' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'Encountered an Error!' })
  }
}

module.exports = {
  signUp,
  signIn
}
