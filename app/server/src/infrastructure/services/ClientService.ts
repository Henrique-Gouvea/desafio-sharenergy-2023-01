import CustomError from "../helpers/errors/CustomErrors"
import { IClient } from "../../interfaces/IClient"
import { IModel } from "../../interfaces/IModel"
import clientValidate from "../validation/clientSchema"

class ClientService implements IModel<IClient> {
  constructor(private _modelClient: IModel<IClient>) {}

  public async create(client: IClient) {
    clientValidate(client)
    const newclient = await this._modelClient.create(client)
    return newclient
  }

  public async read() {
    const clients = await this._modelClient.read()
    return clients
  }

  public async readOne(id: string) {
    const client = await this._modelClient.readOne(id)
    if (!client) throw new CustomError(404, "Client not found")
    return client
  }

  public async update(id: string, client: IClient) {
    clientValidate(client)
    const getClient = await this._modelClient.readOne(id)
    if (!getClient) throw new CustomError(404, "Client not found")
    const updateClient = await this._modelClient.update(id, client)
    return updateClient
  }

  public async delete(id: string) {
    const getclient = await this._modelClient.readOne(id)
    if (!getclient) throw new CustomError(404, "Client not found")
    const deletedclient = await this._modelClient.delete(id)
    return deletedclient
  }
}

export default ClientService
