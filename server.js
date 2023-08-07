const express = require("express")
const app = express()

require("dotenv").config()

let dbConnect = require('./dbConnect')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

app.use(express.json());

//Set up new auth route to handle user sign up(creation), and login
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

app.get("/", (req, res) => {
  res.json({message: "Hello world, this is an express-mysql app."})
})

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=> {
  console.log(`Server is running on port: ${PORT}.`)
})