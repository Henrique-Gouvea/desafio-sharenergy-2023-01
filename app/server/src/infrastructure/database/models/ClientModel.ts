import { model as mongooseCreateModel, Schema } from "mongoose"
import { IClient } from "../../interfaces/IClient"
import MongoModel from "./MongoModel"

const clientMongooseSchema = new Schema<IClient>(
  {
    username: String,
    email: String,
    phone: String,
    address: String,
    cpf: Number,
  },
  { versionKey: false }
)

class ClientModel extends MongoModel<IClient> {
  constructor(model = mongooseCreateModel("Client", clientMongooseSchema)) {
    super(model)
  }
}

export default ClientModel
