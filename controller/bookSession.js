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

const editSession = async (req, res) => {
  try {
    const session = await Session.findByIdAndUpdate(
      req.params.session_id,
      req.body,
      { new: true }
    )
    res.send(session)
  } catch (error) {
    console.log(error)
    throw error
  }
}

const cancelSession = async (req, res) => {
  try {
    await Session.findByIdAndDelete(req.params.session_id)
    res.send({
      msg: 'Session has been canceled, refund has been processed',
      payload: req.params.session_id,
      status: 'Operation completed'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  createSession,
  editSession,
  cancelSession
}
