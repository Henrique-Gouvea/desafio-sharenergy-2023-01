import React, { useState } from "react"
import AppContext from "./AppContext"

function AppProvider({ children }) {
  const [client, setClient] = useState({
    name: "",
    phone: "",
    email: "",
    cpf: "",
    address: "",
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
