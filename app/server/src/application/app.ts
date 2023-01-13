import "express-async-errors"
import express, { NextFunction, Request, Response } from "express"
import cors from "cors"
import helmet from "helmet"
import routeClient from "../infrastructure/routes/ClientRouter"
import errorMiddleware from "../infrastructure/middleware/errorMiddleware"

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())

app.use("/login", () => console.log("Henrique"))
app.use("/client", routeClient)
app.use((err: Error, req: Request, res: Response, next: NextFunction) =>
  errorMiddleware(err, req, res, next)
)

export default app
