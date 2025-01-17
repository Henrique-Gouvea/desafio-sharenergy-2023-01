import * as Joi from "joi"
import { IClient } from "../interfaces/IClient"
import CustomError from "../helpers/errors/CustomErrors"

const clientSchema = Joi.object({
  username: Joi.string().required().messages({
    "string.empty": "Field is name required",
    "any.required": "Field is name required",
  }),

  email: Joi.string().email().required().messages({
    "string.empty": "Field is email required",
    "any.required": "Field is email required",
  }),

  phone: Joi.string().required().messages({
    "string.empty": "Field is phone required",
    "any.required": "Field is phone required",
  }),

  address: Joi.string().required().messages({
    "string.empty": "Field is address required",
    "any.required": "Field is address required",
  }),

  cpf: Joi.string().min(11).max(11).required().messages({
    "string.empty": "Field is cpf required",
    "any.required": "Field is cpf required",
  }),
  user: Joi.string(),
})

const clientValidate = (client: IClient): void => {
  const { error } = clientSchema.validate(client)

  if (error) throw new CustomError(400, error.message)
}

export default clientValidate
