const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const express = require('express')
const router = require('./routes/routes')
const database = require('./config/db')

database()

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

app.use(express.json()) 
app.use(express.urlencoded({extended: false}))

app.use(router)


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))