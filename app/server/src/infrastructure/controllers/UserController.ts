import { Request, Response } from "express"
import { IUser } from "../interfaces/IUser"
import { IServiceLogin } from "../interfaces/IService"

class UserController {
  constructor(private service: IServiceLogin<IUser>) {}

  public async create(req: Request, res: Response) {
    const user = req.body
    const newUser = await this.service.create(user)
    res.status(201).json(newUser)
  }

  public async read(req: Request, res: Response) {
    const users = await this.service.read()
    return res.status(200).json(users)
  }

  public async readOne(req: Request, res: Response) {
    const { id } = req.params
    const getUser = await this.service.readOne(id)
    res.status(200).json(getUser)
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params
    const user = req.body
    const updateUser = await this.service.update(id, user)
    res.status(200).json(updateUser)
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params
    await this.service.delete(id)
    res.status(204).json({ message: "User excluded" })
  }

  public async login(req: Request, res: Response) {
    console.log("henrique")
    const user = req.body

    const token = await this.service.login(user)
    res.status(200).json(token)
  }
}

export default UserController
