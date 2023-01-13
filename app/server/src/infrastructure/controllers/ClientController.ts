import { Request, Response } from "express"
import { IClient } from "../../interfaces/IClient"
import IService from "../../interfaces/IService"

class ClientController {
  constructor(private service: IService<IClient>) {}

  public async create(req: Request, res: Response) {
    const client = req.body
    const newClient = await this.service.create(client)
    res.status(201).json(newClient)
  }

  public async read(req: Request, res: Response) {
    const clients = await this.service.read()
    return res.status(200).json(clients)
  }

  public async readOne(req: Request, res: Response) {
    const { id } = req.params
    const getclient = await this.service.readOne(id)
    res.status(200).json(getclient)
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params
    const client = req.body
    const updateclient = await this.service.update(id, client)
    res.status(200).json(updateclient)
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params
    await this.service.delete(id)
    res.status(204).json({ message: "Client excluded" })
  }
}

export default ClientController
