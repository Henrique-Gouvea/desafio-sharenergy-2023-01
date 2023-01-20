import CustomError from "../helpers/errors/CustomErrors"
import { IClient } from "../interfaces/IClient"
import { IModel } from "../interfaces/IModel"
import clientValidate from "../validation/clientSchema"

class ClientService implements IModel<IClient> {
  constructor(private _modelClient: IModel<IClient>) {}

  public async create(client: IClient): Promise<IClient> {
    clientValidate(client)

    const allClients = await this._modelClient.read()
    const clientVerify = allClients.some(
      (clientSome) => clientSome.cpf === Number(client.cpf)
    )
    if (clientVerify) throw new CustomError(422, "Cpf already registered")
    const newclient = await this._modelClient.create(client)

    return newclient
  }

  public async read(): Promise<IClient[]> {
    const clients = await this._modelClient.read()
    return clients
  }

  public async readOne(id: string): Promise<IClient> {
    const client = await this._modelClient.readOne(id)
    if (!client) throw new CustomError(404, "Client not found")
    return client
  }

  public async update(id: string, client: IClient): Promise<IClient | null> {
    clientValidate(client)
    const getClient = await this._modelClient.readOne(id)
    console.log(getClient)

    if (!getClient) throw new CustomError(404, "Client not found")
    console.log(id, client)

    const updateClient = await this._modelClient.update(id, client)
    console.log(updateClient)

    return updateClient
  }

  public async delete(id: string): Promise<IClient | null> {
    const getclient = await this._modelClient.readOne(id)
    if (!getclient) throw new CustomError(404, "Client not found")
    const deletedclient = await this._modelClient.delete(id)
    return deletedclient
  }
}

export default ClientService
