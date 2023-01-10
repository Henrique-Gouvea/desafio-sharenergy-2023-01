import express from "express"
import cors from "cors"
import helmet from "helmet"

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())

app.use("/login", () => console.log("Henrique"))

export default app
