import React, { Component } from "react"
import { Link } from "react-router-dom"

class HeaderG extends Component {
  render() {
    return (
      <header>
        <div className="bg-green-700 py-4">
          <div className="container mx-auto">
            <ul className="flex flex-row flex">
              <li className="px-4">
                <Link to="/users">Usuarios</Link>
              </li>
              <li className="px-4">
                <Link to="/dogs">Cachorros aleatorios</Link>
              </li>
              <li className="px-4">
                <Link to="/status">Status Code</Link>
              </li>
              <li className="px-4">
                <Link to="/clients">Clientes</Link>
              </li>
              <li className="px-35">
                <Link to="/">Sair</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default HeaderG
