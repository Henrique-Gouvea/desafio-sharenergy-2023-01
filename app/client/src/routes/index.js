import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "../pages/login"

import NotFound from "../pages/NotFound"

function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/users" element={<div>users</div>} />
      <Route exact path="/status" element={<div>status</div>} />
      <Route exact path="/dogs" element={<div>dogs</div>} />
      <Route exact path="/clients" element={<div>clients</div>} />

      <Route path="" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesApp
