import { model as mongooseCreateModel, Schema } from "mongoose"
import { IUser } from "../../../interfaces/IUser"
import MongoModel from "./MongoModel"

const clientMongooseSchema = new Schema<IUser>(
  {
    username: String,
    password: String,
  },
  { versionKey: false }
)

class UserModel extends MongoModel<IUser> {
  constructor(model = mongooseCreateModel("User", clientMongooseSchema)) {
    super(model)
  }
}

export default UserModel
