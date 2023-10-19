const { User } = require('../Models/User')
const middleware = require('../middleware')

const signUp = async (req, res) => {
  try {
    const { firstName, lastName, age, discordAccount, emailAddress, password } =
      req.body

    let passwordDigest = await middleware.hashPassword(password)
    let existingUser = await User.findOne({ emailAddress })
    if (existingUser) {
      return res.status(400).send('user already exists')
    } else {
      const user = await User.create({
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

module.exports = {
  signUp,
  signIn
}
