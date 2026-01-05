
const authenticate = (req, res, next) => {
  const userId = res.body.userId
  res.status(200).json({message: 'authenticated user'})
  next()
}
module.exports = {
  authenticate
}