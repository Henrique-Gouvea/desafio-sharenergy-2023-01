import { NextFunction, Request, Response } from "express"
import CustomError from "../helpers/errors/CustomErrors"
import { IToken } from "../interfaces/providers/IToken"

class TokenMiddleware {
  constructor(private token: IToken) {}

  checkTokenMiddleware(req: Request, _res: Response, next: NextFunction): void {
    try {
      const authHeader = req.headers.authorization

      if (!authHeader) {
        throw new CustomError(401, "Invalid token")
      }

      const data = this.token.checkToken(authHeader)
      req.body.user = data

      next()
    } catch (err) {
      next(err)
    }
  }
}

export default TokenMiddleware
