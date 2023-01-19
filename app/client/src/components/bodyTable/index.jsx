import React from "react"

function BodyTable({ body }) {
  return (
    <tbody>
      {body ? (
        body.map((bodyUnit) => (
          <tr>
            <td>{bodyUnit.name}</td>
            <td>{bodyUnit.email}</td>
          </tr>
        ))
      ) : (
        <></>
      )}
    </tbody>
  )
}

export default BodyTable
