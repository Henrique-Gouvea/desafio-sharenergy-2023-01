import ClientModel from "../database/models/ClientModel"
import ClientService from "../services/ClientService"
import clientController from "../controllers/ClientController"

const clientModel = new ClientModel()
const carService = new ClientService(clientModel)
