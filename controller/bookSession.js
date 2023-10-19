const { Session } = require('../Models/Session')

const createSession = async (req, res) => {
  try {
    const session = await Session.create({ ...req.body })
    res.send(session)
  } catch (error) {
    console.log(error)
    throw error
  }
}

module.exports = {
  createSession
}
