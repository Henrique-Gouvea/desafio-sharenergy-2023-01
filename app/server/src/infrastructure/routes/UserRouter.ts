import { Router, Request, Response } from "express"
import userController from "../integration/UserIntegration"

const userLogin = Router()

userLogin.post("/", (req: Request, res: Response) =>
  userController.create(req, res)
)

userLogin.get("/", (req: Request, res: Response) =>
  userController.read(req, res)
)

userLogin.get("/:id", (req: Request, res: Response) =>
  userController.readOne(req, res)
)

userLogin.put("/:id", (req: Request, res: Response) =>
  userController.update(req, res)
)

userLogin.delete("/:id", (req: Request, res: Response) =>
  userController.delete(req, res)
)

export default userLogin
