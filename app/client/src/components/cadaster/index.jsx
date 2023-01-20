import React, { useContext } from "react"
import Input from "../input"
import AppContext from "../../context/AppContext"

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
    <div>
      <p>Nome:</p>
      <Input
        name="name"
        disabled={inputDisabled}
        value={client.name}
        onChange={(event) => handleChange(event)}
      />
      <p>Telefone:</p>
      <Input
        name="phone"
        disabled={inputDisabled}
        value={client.phone}
        onChange={(event) => handleChange(event)}
      />
      <p>Email:</p>
      <Input
        name="email"
        disabled={inputDisabled}
        value={client.email}
        onChange={(event) => handleChange(event)}
      />
      <p>CPF:</p>
      <Input
        name="cpf"
        disabled={inputDisabled}
        value={client.cpf}
        onChange={(event) => handleChange(event)}
      />
      <p>Endereço:</p>
      <Input
        name="address"
        disabled={inputDisabled}
        value={client.address}
        onChange={(event) => handleChange(event)}
      />
    </div>
  )
}

export default Cadaster
