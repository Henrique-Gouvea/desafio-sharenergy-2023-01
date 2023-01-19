import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "../pages/login"
import Users from "../pages/users"
import StatusCode from "../pages/status"
import Random from "../pages/random"
import Client from "../pages/clients"

import NotFound from "../pages/NotFound"

function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/users" element={<Users />} />
      <Route exact path="/status" element={<StatusCode />} />
      <Route exact path="/dogs" element={<Random />} />
      <Route exact path="/clients" element={<Client />} />

      <Route path="" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesApp
