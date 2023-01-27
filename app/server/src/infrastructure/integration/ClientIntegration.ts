import ClientModel from "../database/models/ClientModel"
import ClientService from "../services/ClientService"
import ClientController from "../controllers/ClientController"

const clientModel = new ClientModel()
const clientService = new ClientService(clientModel)
const clientController = new ClientController(clientService)

export default clientController
