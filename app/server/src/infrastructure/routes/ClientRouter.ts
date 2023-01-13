import { Router, Request, Response } from "express"
import clientController from "../controllers/clientController"

const routeClient = Router()

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
