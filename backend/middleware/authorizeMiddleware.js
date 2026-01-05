
const authorize = (req, res, next) => {
  const userId = res.body.userId
  res.status(200).json({message: 'authorized user'})
  next()
}

module.exports = {
  authorize
}