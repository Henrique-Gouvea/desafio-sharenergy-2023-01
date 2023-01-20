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

  useEffect(() => {}, [clients])

  const stateValue = {
    client,
    setClient,
    clients,
    setClients,
  }

  return (
    <AppContext.Provider value={stateValue}>{children}</AppContext.Provider>
  )
}

export default AppProvider
