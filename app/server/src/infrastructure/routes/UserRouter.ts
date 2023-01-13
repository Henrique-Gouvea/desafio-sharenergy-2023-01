import { Router, Request, Response } from "express"
import userController from "../integration/UserIntegration"

const routeUser = Router()

routeUser.post("/", (req: Request, res: Response) =>
  userController.create(req, res)
)

routeUser.get("/", (req: Request, res: Response) =>
  userController.read(req, res)
)

routeUser.get("/:id", (req: Request, res: Response) =>
  userController.readOne(req, res)
)

routeUser.put("/:id", (req: Request, res: Response) =>
  userController.update(req, res)
)

routeUser.delete("/:id", (req: Request, res: Response) =>
  userController.delete(req, res)
)

export default routeUser
