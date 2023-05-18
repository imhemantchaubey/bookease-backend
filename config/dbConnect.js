import mongoose from "mongoose"
import chalk from "chalk"

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

export default connect
