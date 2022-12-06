const express = require('express')
const cors = require('cors')
require('dotenv').config()

const itemRouter = require('./routes/router')

const app = express()

const PORT = process.env.APP_PORT || 3300

app.use(cors())
app.use(express.json())

app.use(itemRouter)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})