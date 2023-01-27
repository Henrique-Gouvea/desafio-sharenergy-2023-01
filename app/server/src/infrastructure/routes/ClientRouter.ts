import { Router, Request, Response, NextFunction } from "express"
import clientController from "../integration/ClientIntegration"
import tokenMiddleware from "../integration/TokenIntegration"

const routeClient = Router()

routeClient.use((req: Request, res: Response, next: NextFunction) =>
  tokenMiddleware.checkTokenMiddleware(req, res, next)
)

routeClient.post("/", (req: Request, res: Response) =>
  clientController.create(req, res)
)

routeClient.get("/", (req: Request, res: Response) =>
  clientController.read(req, res)
)

routeClient.get("/:id", (req: Request, res: Response) =>
  clientController.readOne(req, res)
)

routeClient.put("/:id", (req: Request, res: Response) =>
  clientController.update(req, res)
)

routeClient.delete("/:id", (req: Request, res: Response) =>
  clientController.delete(req, res)
)

export default routeClient
