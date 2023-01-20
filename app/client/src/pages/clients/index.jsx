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
      clients: "",
      inputDisabled: true,
      btnNewClientDisabled: false,
      btnCancelDisabled: true,
      btnSaveDisabled: true,
    }
    this.headerTable = ["Nome", "E-mail", "Dados", "Editar", "Deletar"]
    this.httpService = new HttpService()
    this.urlService = new UrlService()
  }
  static contextType = AppContext
  async componentDidMount() {
    const { clientUrl } = this.urlService
    const { data } = await this.httpService.get(clientUrl())
    this.setState({ clients: data })
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
    setClient({ username: "", phone: "", email: "", cpf: "", address: "" })
  }

  btnNewClient() {
    this.changeStateDisableInput()
  }

  btnCancel() {
    this.clearStateInputs()
    this.changeStateDisableInput()
  }

  btnSave() {
    const { client } = this.context
    console.log(client)
    this.clearStateInputs()
    this.changeStateDisableInput()
  }

  render() {
    const {
      clients,
      inputDisabled,
      btnNewClientDisabled,
      btnCancelDisabled,
      btnSaveDisabled,
    } = this.state
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
        <Table headerTH={this.headerTable} body={clients} />
      </div>
    )
  }
}

export default Client
