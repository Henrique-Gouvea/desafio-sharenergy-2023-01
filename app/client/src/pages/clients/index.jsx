import React, { Component } from "react"
import HttpService from "../../service/HttpService"
import UrlService from "../../service/UrlService"
import Table from "../../components/table"
import Cadaster from "../../components/cadaster"
import Button from "../../components/button"

import AppContext from "../../context/AppContext"

class Client extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clients: [],
      inputDisabled: true,
      btnNewClientDisabled: false,
      btnCancelDisabled: true,
      btnSaveDisabled: true,
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
    this.setState({
      inputDisabled: !this.state.inputDisabled,
      btnNewClientDisabled: !this.state.btnNewClientDisabled,
      btnCancelDisabled: !this.state.btnCancelDisabled,
      btnSaveDisabled: !this.state.btnSaveDisabled,
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

  async btnSave() {
    const { clientUrl } = this.urlService
    const { client, setClients } = this.context
    delete client.edit
    const { data, status } = await this.httpService.post(clientUrl(), client)
    if (status !== 201) {
      this.setState({ responseMessage: data.message })
    } else {
      const { data } = await this.httpService.get(clientUrl())
      setClients(data ? data : [])
      this.setState({ responseMessage: "" })
      this.clearStateInputs()
      this.changeStateDisableInput()
    }
  }

  useEffect

  render() {
    const {
      inputDisabled,
      btnNewClientDisabled,
      btnCancelDisabled,
      btnSaveDisabled,
      responseMessage,
    } = this.state
    const { clients } = this.context
    return (
      <div>
        <Button
          onClick={() => this.btnNewClient()}
          disabled={btnNewClientDisabled}
        >
          Novo Cliente
        </Button>
        <Button onClick={() => this.btnCancel()} disabled={btnCancelDisabled}>
          Cancelar
        </Button>
        <Button onClick={() => this.btnSave()} disabled={btnSaveDisabled}>
          Salvar
        </Button>
        <Cadaster inputDisabled={inputDisabled} />
        {responseMessage ? <p>{responseMessage}</p> : ""}
        <Table headerTH={this.headerTable} body={clients} />
      </div>
    )
  }
}

export default Client
