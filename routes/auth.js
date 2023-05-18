import chalk from "chalk"
import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
  console.log(chalk.bgBlue("Auth route hit!"))
})

export default router
