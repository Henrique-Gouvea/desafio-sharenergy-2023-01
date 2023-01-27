import React, { useContext } from "react"
import AppContext from "../../context/AppContext"
import { Input } from "@material-ui/core"

function Cadaster({ inputDisabled }) {
  const { client, setClient } = useContext(AppContext)

  const handleChange = ({ target: { value, name } }) => {
    setClient((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      }
    })
  }
  return (
    <div className="flex flex-wrap">
      <div className="p-3">
        <p>Nome:</p>
        <Input
          name="username"
          disabled={inputDisabled}
          value={client.username}
          onChange={(event) => handleChange(event)}
        />
      </div>
      <div className="p-3">
        <p>Telefone:</p>
        <Input
          name="phone"
          disabled={inputDisabled}
          value={client.phone}
          onChange={(event) => handleChange(event)}
        />
      </div>
      <div className="p-3">
        <p>Email:</p>
        <Input
          name="email"
          disabled={inputDisabled}
          value={client.email}
          onChange={(event) => handleChange(event)}
        />
      </div>
      <div className="p-3">
        <p>CPF:</p>
        <Input
          name="cpf"
          disabled={inputDisabled}
          value={Number(client.cpf)}
          onChange={(event) => handleChange(event)}
        />
      </div>
      <div className="p-3">
        <p>Endereço:</p>
        <Input
          name="address"
          disabled={inputDisabled}
          value={client.address}
          onChange={(event) => handleChange(event)}
        />
      </div>
    </div>
  )
}

export default Cadaster
