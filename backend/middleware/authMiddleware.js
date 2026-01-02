
const register = (req, res) => {
  const { name, email, phone, password } = req.params
  res.status(200).json({
    message: 'Registration successful',
    user:{
      name,
      email,
      phone
    }})
}

const login = (req, res) => {
  const { email, password } = req.params
  res.status(200).json({
    message: 'Loggin successful'
  })
}

module.exports = {
  register,
  login
}