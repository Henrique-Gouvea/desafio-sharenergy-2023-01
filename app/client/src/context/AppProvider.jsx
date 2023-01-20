import React, { useState, useEffect } from "react"
import AppContext from "./AppContext"

function AppProvider({ children }) {
  const [client, setClient] = useState({
    username: "",
    phone: "",
    email: "",
    cpf: "",
    address: "",
    edit: false,
  })
  const [clients, setClients] = useState([])
  const [disabled, setDisabled] = useState({
    inputDisabled: true,
    btnNewClientDisabled: false,
    btnCancelDisabled: true,
    btnSaveDisabled: true,
  })

  useEffect(() => {}, [clients])

  const stateValue = {
    client,
    setClient,
    clients,
    setClients,
    disabled,
    setDisabled,
  }

  return (
    <AppContext.Provider value={stateValue}>{children}</AppContext.Provider>
  )
}

export default AppProvider
