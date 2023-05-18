import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import chalk from "chalk"

const app = express()
dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.URI)
  } catch (error) {
    throw error
  }
}

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bgRed("Connection to the database has been lost..."))
})

mongoose.connection.on("connected", () => {
  console.log(chalk.bgGreen("Successfully connected to database!"))
})

app.listen(8081, () => {
  connect()
  console.log(chalk.bgYellow("Server is running on port 8081!"))
})
