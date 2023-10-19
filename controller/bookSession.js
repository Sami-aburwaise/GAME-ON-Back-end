const { Session } = require('../Models/Session')

const session_show_get = async (req, res) => {
  try {
    const session = await Session.find({})
    res.send(session)
  } catch (error) {
    throw error
  }
}

const session_create_post = async (req, res) => {
  try {
    const session = await Session.create({ ...req.body })
    res.send(session)
  } catch (error) {
    console.log(error)
    throw error
  }
}

const session_edit_post = async (req, res) => {
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

const session_delete_get = async (req, res) => {
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
  session_show_get,
  session_create_post,
  session_edit_post,
  session_delete_get
}
