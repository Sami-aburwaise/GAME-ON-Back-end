const { Session } = require('../Models/Session')

const session_show_get = async (req, res) => {
  try {
    const session = await Session.find({ userId: req.query.userId })
    res.send(session)
  } catch (error) {
    throw error
  }
}

const session_create_post = (req, res) => {
  const session = new Session({ ...req.body })
  session
    .save()
    .then(() => {
      res.send({
        msg: 'session booked',
        status:true,
        session: session
      })
    })
    .catch((err) => {
      console.log(err)
      res.send({
        msg: 'invalid session',
        status:false,
        session: session
      })
    })
}

const session_edit_post = async (req, res) => {
  try {
    const session = await Session.findByIdAndUpdate(
      req.params.session_id,
      req.body,
      { new: true }
    )
    res.send({
      msg: 'session updated',
      status:true,
      session: session
    })
  } catch (error) {
    console.log(error)
    res.send({
      msg: 'couldnt update',
      status:false,
    })
    throw error
  }
}

const session_delete_get = async (req, res) => {
  try {
    const session = await Session.findByIdAndDelete(req.params.session_id)
    res.send({
      msg: `Session with ${session.coach} has been canceled, refund has been processed`,
      status:true,
      payload: req.params.session_id,
      status: 'Operation completed'
    })
  } catch (error) {
    res.send({
      msg: 'session updated',
      status:false,
    })
    throw error
  }
}

module.exports = {
  session_show_get,
  session_create_post,
  session_edit_post,
  session_delete_get
}
