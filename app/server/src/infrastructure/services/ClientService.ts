import { IClient } from "../../interfaces/IClient"
import { IModel } from "../../interfaces/IModel"

class ClientService implements IModel<IClient> {
  constructor(private _modelClient: IModel<IClient>) {}

  public async create(client: IClient) {
    const newclient = await this._modelClient.create(client)
    return newclient
  }

  public async read() {
    const clients = await this._modelClient.read()
    return clients
  }

  public async readOne(id: string) {
    const client = await this._modelClient.readOne(id)
    return client
  }

  public async update(id: string, client: IClient) {
    const getClient = await this._modelClient.readOne(id)
    const updateClient = await this._modelClient.update(id, client)
    return updateClient
  }

  public async delete(id: string) {
    const getclient = await this._modelClient.readOne(id)
    const deletedclient = await this._modelClient.delete(id)
    return deletedclient
  }
}

export default ClientService
