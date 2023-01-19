import React from "react"
import Button from "../button"

function BodyTable({ body }) {
  return (
    <tbody>
      {body ? (
        body.map((bodyUnit) => (
          <tr>
            <td>{bodyUnit.username}</td>
            <td>{bodyUnit.email}</td>
            <td>
              <Button>Mais Info</Button>
            </td>
            <td>
              <Button>Editar</Button>
            </td>
            <td>
              <Button>Deletar</Button>
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
