import { Router, Request, Response, NextFunction } from "express"
import tokenMiddleware from "../integration/TokenIntegration"
import userController from "../integration/UserIntegration"

const routeUser = Router()

routeUser.post("/", (req: Request, res: Response) =>
  userController.create(req, res)
)

routeUser.post("/auth", (req: Request, res: Response) =>
  userController.login(req, res)
)

routeUser.use((req: Request, res: Response, next: NextFunction) =>
  tokenMiddleware.checkTokenMiddleware(req, res, next)
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
