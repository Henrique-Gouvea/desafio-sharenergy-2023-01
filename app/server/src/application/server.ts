import "dotenv/config"
import app from "./app"
import connectToDatabase from "../infrastructure/database/config/connection"

connectToDatabase()
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Running server on port: ${process.env.PORT}`)
    )
  })
  .catch((error) => {
    console.error(error)
    process.exit(0)
  })
