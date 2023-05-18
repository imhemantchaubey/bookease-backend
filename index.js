import express from "express"
import dotenv from "dotenv"
import chalk from "chalk"

import connect from "./config/dbConnect.js"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
  connect()
  console.log(chalk.bgYellow(`Server is running on port ${PORT}!`))
})
