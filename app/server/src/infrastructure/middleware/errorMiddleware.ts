import { ErrorRequestHandler } from "express"

const errorMiddleware: ErrorRequestHandler = async (err, _req, res) => {
  const { status, message } = err
  if (!status) {
    return res.status(500).json({ message: err.message })
  }
  return res.status(status).json({ message })
}

export default errorMiddleware
