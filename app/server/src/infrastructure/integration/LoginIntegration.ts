import LoginModel from "../database/models/LoginModel"
import LoginService from "../services/LoginService"
import LoginController from "../controllers/LoginController"

const loginModel = new LoginModel()
const loginService = new LoginService(LoginModel)
const loginController = new LoginController(LoginService)

export default LoginController
