import { Request, Response } from "express"
import CustomError from "./CustomErrors"

const globalError = (err: CustomError, _req: Request, res: Response) => {
  const status = err.status || 500
  const message = err.message || "Something went wrong"
  return res.status(status).json({ error: message })
}

export default globalError
