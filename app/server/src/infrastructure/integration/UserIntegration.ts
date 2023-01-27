import UserModel from "../database/models/UserModel"
import UserService from "../services/UserService"
import UserController from "../controllers/UserController"
import TokenProvider from "../providers/tokenProvider"

const userModel = new UserModel()
const tokenProvider = new TokenProvider()

const userService = new UserService(userModel, tokenProvider)
const userController = new UserController(userService)

export default userController
