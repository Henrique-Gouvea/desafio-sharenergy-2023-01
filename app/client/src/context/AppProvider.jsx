import React, { useState } from "react"
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

  const stateValue = {
    client,
    setClient,
  }

  return (
    <AppContext.Provider value={stateValue}>{children}</AppContext.Provider>
  )
}

export default AppProvider
