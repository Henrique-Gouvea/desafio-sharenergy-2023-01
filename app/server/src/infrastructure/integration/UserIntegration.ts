import UserModel from "../database/models/UserModel"
import UserService from "../services/UserService"
import UserController from "../controllers/UserController"

const userModel = new UserModel()
const userService = new UserService(userModel)
const userController = new UserController(userService)

export default userController
