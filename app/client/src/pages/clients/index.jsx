import React, { Component } from "react"
import HttpService from "../../service/HttpService"
import UrlService from "../../service/UrlService"
import TableG from "../../components/table"
import Cadaster from "../../components/cadaster"
// import Button from "../../components/button"
import { Button } from "@material-ui/core"

import AppContext from "../../context/AppContext"

class Client extends Component {
  constructor(props) {
    super(props)
    this.state = {
      responseMessage: false,
    }
    this.headerTable = [
      "Nome",
      "E-mail",
      "Telefone",
      "CPF",
      "Endereço",
      "Editar",
      "Deletar",
    ]
    this.httpService = new HttpService()
    this.urlService = new UrlService()
  }
  static contextType = AppContext

  async componentDidMount() {
    const { setClients } = this.context
    const { clientUrl } = this.urlService
    const { data } = await this.httpService.get(clientUrl())
    setClients(data ? data : [])
  }

  changeStateDisableInput() {
    const { setDisabled, disabled } = this.context
    setDisabled({
      inputDisabled: !disabled.inputDisabled,
      btnNewClientDisabled: !disabled.btnNewClientDisabled,
      btnCancelDisabled: !disabled.btnCancelDisabled,
      btnSaveDisabled: !disabled.btnSaveDisabled,
    })
  }

  clearStateInputs() {
    const { setClient } = this.context
    setClient({
      username: "",
      phone: "",
      email: "",
      cpf: "",
      address: "",
      edit: false,
    })
  }

  btnNewClient() {
    this.changeStateDisableInput()
  }

  btnCancel() {
    this.clearStateInputs()
    this.changeStateDisableInput()
  }

  async initialConfig() {
    const { clientUrl } = this.urlService
    const { setClients } = this.context
    const { data } = await this.httpService.get(clientUrl())
    setClients(data ? data : [])
    this.setState({ responseMessage: "" })
    this.clearStateInputs()
    this.changeStateDisableInput()
  }

  async btnSave() {
    const { clientUrl } = this.urlService
    const { client } = this.context
    if (client.edit) {
      delete client.edit
      const teste = await this.httpService.put(clientUrl(client._id))
      console(teste)
      this.initialConfig()
      return
    }
    delete client.edit
    const { data, status } = await this.httpService.post(clientUrl(), client)
    if (status !== 201) {
      this.setState({ responseMessage: data.message })
    } else {
      this.initialConfig()
    }
  }

  useEffect

  render() {
    const { responseMessage } = this.state
    const { clients, disabled } = this.context
    return (
      <div>
        <div className="container mx-auto px-4 py-10 space-y-8">
          <div className="border shadow-2xl rounded max-w-[1000px] w-full mx-auto bg-white p-8">
            <Button
              onClick={() => this.btnNewClient()}
              disabled={disabled.btnNewClientDisabled}
            >
              Novo Cliente
            </Button>
            <Button
              onClick={() => this.btnCancel()}
              disabled={disabled.btnCancelDisabled}
            >
              Cancelar
            </Button>
            <Button
              onClick={() => this.btnSave()}
              disabled={disabled.btnSaveDisabled}
            >
              Salvar
            </Button>
            <Cadaster inputDisabled={disabled.inputDisabled} />
            {responseMessage ? <p>{responseMessage}</p> : ""}
          </div>
        </div>

        <TableG headerTH={this.headerTable} body={clients} />
      </div>
    )
  }
}

export default Client
