import CustomError from "../helpers/errors/CustomErrors"
import { IUser } from "../../interfaces/IUser"
import { IModel } from "../../interfaces/IModel"
import userValidate from "../validation/userSchema"

class userService implements IModel<IUser> {
  constructor(private _modelUser: IModel<IUser>) {}

  public async create(user: IUser): Promise<IUser> {
    userValidate(user)
    const allusers = await this._modelUser.read()
    const userVerify = allusers.some(
      (userSome) => userSome.username === user.username
    )
    if (userVerify) throw new CustomError(422, "User already registered")
    const newuser = await this._modelUser.create(user)
    return newuser
  }

  public async read(): Promise<IUser[]> {
    const users = await this._modelUser.read()
    return users
  }

  public async readOne(id: string): Promise<IUser> {
    const user = await this._modelUser.readOne(id)
    if (!user) throw new CustomError(404, "User not found")
    return user
  }

  public async update(id: string, user: IUser): Promise<IUser | null> {
    userValidate(user)
    const getUser = await this._modelUser.readOne(id)
    if (!getUser) throw new CustomError(404, "User not found")
    const updateUser = await this._modelUser.update(id, user)
    return updateUser
  }

  public async delete(id: string): Promise<IUser | null> {
    const getUser = await this._modelUser.readOne(id)
    if (!getUser) throw new CustomError(404, "User not found")
    const delectedUser = await this._modelUser.delete(id)
    return delectedUser
  }
}

export default userService
