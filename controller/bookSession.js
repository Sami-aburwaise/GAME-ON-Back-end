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
  /*   try {
    const session = await Session.create({ ...req.body })
    res.send({
      msg: 'session created',
      session: session
    })
  } catch (error) {
    throw error
  } */

  const session = new Session({ ...req.body })
  session
    .save()
    .then(() => {
      res.send({
        msg: 'session created',
        session: session
      })
    })
    .catch((err) => {
      console.log(err)
      res.send({
        msg: 'invalid session',
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
      session: session
    })
  } catch (error) {
    console.log(error)
    throw error
  }
}

const session_delete_get = async (req, res) => {
  try {
    await Session.findByIdAndDelete(req.params.session_id)
    res.send({
      msg: `Session ${req.params.session_id} has been canceled, refund has been processed`,
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
