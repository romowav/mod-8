const postUser = (req, res) => {
  res.status(201).json({message: 'crear Usuario'})
}

const loginUser = (req, res) => {
  res.status(201).json({message: 'login Usuario'})
}

const getUser = (req, res) => {
  res.status(201).json({message: 'get datos Usuario'})
}

module.exports = {
  postUser,
  loginUser,
  getUser
}