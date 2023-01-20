import React, { useContext } from "react"
import Button from "../button"
import AppContext from "../../context/AppContext"
import HttpService from "../../service/HttpService"
import UrlService from "../../service/UrlService"
import { TableRow } from "@material-ui/core"

function BodyTable({ body }) {
  const { setClient, setClients, setDisabled, disabled } =
    useContext(AppContext)
  const httpService = new HttpService()
  const urlService = new UrlService()

  const btnEditClient = (_event, client) => {
    setClient({ ...client, edit: true })
    setDisabled({
      inputDisabled: !disabled.inputDisabled,
      btnNewClientDisabled: !disabled.btnNewClientDisabled,
      btnCancelDisabled: !disabled.btnCancelDisabled,
      btnSaveDisabled: !disabled.btnSaveDisabled,
    })
  }

  const removeClient = async (_event, client) => {
    const { clientUrlId, clientUrl } = urlService
    await httpService.delete(clientUrlId(String(client._id)))
    const { data } = await httpService.get(clientUrl())
    setClients(data ? data : [])
  }

  return (
    <tbody>
      {body ? (
        body.map((bodyUnit, index) => (
          <TableRow key={index}>
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
          </TableRow>
        ))
      ) : (
        <></>
      )}
    </tbody>
  )
}

export default BodyTable
