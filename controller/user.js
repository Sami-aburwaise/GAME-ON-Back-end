const { User } = require('../Models/User')
const Session = require('../Models/Session')

const user_show_get = async (req, res) => {
  try {
    const user = await User.findById(req.query.userid).populate('sessionsId')
    console.log(user)
    res.send(user)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { user_show_get }
