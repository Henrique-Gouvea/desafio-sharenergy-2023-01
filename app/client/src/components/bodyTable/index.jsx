import React, { useContext } from "react"
import Button from "../button"
import AppContext from "../../context/AppContext"

function BodyTable({ body }) {
  const { setClient } = useContext(AppContext)

  const btnEditClient = (event, clientUnit) => {
    console.log(clientUnit)
    setClient({ ...clientUnit })
  }

  const removeClient = (event) => {}

  return (
    <tbody>
      {body ? (
        body.map((bodyUnit, index) => (
          <tr key={index}>
            <td>{bodyUnit.username}</td>
            <td>{bodyUnit.email}</td>
            <td>{bodyUnit.phone}</td>
            <td>{bodyUnit.cpf}</td>
            <td>{bodyUnit.address}</td>

            <td>
              <Button onClick={(event) => btnEditClient(event, bodyUnit)}>
                Editar
              </Button>
            </td>
            <td>
              <Button onClick={(event) => removeClient(event, bodyUnit)}>
                Deletar
              </Button>
            </td>
          </tr>
        ))
      ) : (
        <></>
      )}
    </tbody>
  )
}

export default BodyTable
