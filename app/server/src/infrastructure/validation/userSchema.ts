import * as Joi from "joi"
import { IUser } from "../interfaces/IUser"
import CustomError from "../helpers/errors/CustomErrors"

const userSchema = Joi.object({
  username: Joi.string().required().messages({
    "string.empty": "Field is name required",
    "any.required": "Field is name required",
  }),

  password: Joi.string().required().messages({
    "string.empty": "Field is password required",
    "any.required": "Field is password required",
  }),
})

const userValidate = (user: IUser): void => {
  const { error } = userSchema.validate(user)

  if (error) throw new CustomError(400, error.message)
}

export default userValidate
