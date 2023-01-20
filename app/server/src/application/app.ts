import "express-async-errors"
import express, { NextFunction, Request, Response } from "express"
import cors from "cors"
import helmet from "helmet"

import errorMiddleware from "../infrastructure/middleware/errorMiddleware"
import routeClient from "../infrastructure/routes/ClientRouter"
import routeUser from "../infrastructure/routes/UserRouter"

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())

app.use("/user", routeUser)
app.use("/clients", routeClient)
app.use((err: Error, req: Request, res: Response, next: NextFunction) =>
  errorMiddleware(err, req, res, next)
)

export default app
