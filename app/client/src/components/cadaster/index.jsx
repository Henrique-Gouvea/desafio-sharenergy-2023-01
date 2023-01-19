import React from "react"
import Input from "../input"

function Cadaster({ inputDisabled }) {
  return (
    <div>
      <p>Nome:</p>
      <Input disabled={inputDisabled} />
      <p>Telefone:</p>
      <Input disabled={inputDisabled} />
      <p>Email:</p>
      <Input disabled={inputDisabled} />
      <p>CPF:</p>
      <Input disabled={inputDisabled} />
      <p>Adress:</p>
      <Input disabled={inputDisabled} />
    </div>
  )
}

export default Cadaster
