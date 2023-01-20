import React, { useContext } from "react"
import Button from "../button"
import AppContext from "../../context/AppContext"
import HttpService from "../../service/HttpService"
import UrlService from "../../service/UrlService"

function BodyTable({ body }) {
  const { setClient } = useContext(AppContext)
  const httpService = new HttpService()
  const urlService = new UrlService()

  const btnEditClient = (_event, client) => {
    setClient({ ...client, edit: true })
  }

  const removeClient = async (_event, client) => {
    const { clientUrlId } = urlService
    await httpService.delete(clientUrlId(String(client._id)))
  }

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
