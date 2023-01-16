import { JwtPayload, sign, verify } from "jsonwebtoken"
import "dotenv/config"
import { IToken } from "../interfaces/providers/IToken"
import CustomError from "../helpers/errors/CustomErrors"

class TokenProvider implements IToken {
  private jwtSecret: string
  constructor() {
    this.jwtSecret = process.env.JWT_SECRET || "jwt_secret"
  }

  generateToken(username: string): string {
    const token = sign({ data: username }, this.jwtSecret, {
      expiresIn: "5d",
      algorithm: "HS256",
    })

    return token
  }

  checkToken(token: string): string {
    try {
      const response = verify(token, this.jwtSecret)
      if (!response) throw new CustomError(401, "Token must be a valid token")
      const { data } = response as JwtPayload

      return data
    } catch (err) {
      throw new CustomError(401, "Token must be a valid token")
    }
  }
}

export default TokenProvider
