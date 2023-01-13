import { Router, Request, Response } from "express"
import loginController from "../integration/LoginIntegration"

const routeLogin = Router()

routeLogin.post("/", (req: Request, res: Response) =>
  loginController.create(req, res)
)

routeLogin.get("/", (req: Request, res: Response) =>
  loginController.read(req, res)
)

routeLogin.get("/:id", (req: Request, res: Response) =>
  loginController.readOne(req, res)
)

routeLogin.put("/:id", (req: Request, res: Response) =>
  loginController.update(req, res)
)

routeLogin.delete("/:id", (req: Request, res: Response) =>
  loginController.delete(req, res)
)

export default routeLogin
