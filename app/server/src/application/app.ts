import express from "express"
import cors from "cors"
import helmet from "helmet"
import routeClient from "../infrastructure/routes/ClientRouter"

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())

app.use("/login", () => console.log("Henrique"))
app.use("/client", routeClient)

export default app
