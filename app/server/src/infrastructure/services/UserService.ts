import CustomError from "../helpers/errors/CustomErrors"
import { IUser } from "../interfaces/IUser"
import { IModel } from "../interfaces/IModel"
import userValidate from "../validation/userSchema"
import { IToken } from "../interfaces/providers/IToken"

const USER_NOTFOUND = "User not found"
const ADMIN = { username: "desafiosharenergy", password: "sh@r3n3rgy" }

class userService implements IModel<IUser> {
  constructor(private _modelUser: IModel<IUser>, private token: IToken) {}

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
    if (!user) throw new CustomError(404, USER_NOTFOUND)
    return user
  }

  public async update(id: string, user: IUser): Promise<IUser | null> {
    userValidate(user)
    const getUser = await this._modelUser.readOne(id)
    if (!getUser) throw new CustomError(404, USER_NOTFOUND)
    const updateUser = await this._modelUser.update(id, user)
    return updateUser
  }

  public async delete(id: string): Promise<IUser | null> {
    const getUser = await this._modelUser.readOne(id)
    if (!getUser) throw new CustomError(404, USER_NOTFOUND)
    const delectedUser = await this._modelUser.delete(id)
    return delectedUser
  }

  public async login(user: IUser): Promise<string | null> {
    userValidate(user)

    const allusers = await this._modelUser.read()
    allusers.push(ADMIN)
    const userVerify: IUser | undefined = allusers.find(
      (userSome) => userSome.username === user.username
    )

    if (!userVerify) throw new CustomError(422, USER_NOTFOUND)
    if (userVerify.password !== user.password)
      throw new CustomError(422, "Incorrect password")

    const token = this.token.generateToken(user.username)
    return token
  }
}

export default userService
