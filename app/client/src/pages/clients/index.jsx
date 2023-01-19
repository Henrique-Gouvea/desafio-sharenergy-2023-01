import React, { Component } from "react"
import HttpService from "../../service/HttpService"
import UrlService from "../../service/UrlService"
import Table from "../../components/table"

class Client extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clients: "",
    }
    this.headerTable = ["Nome", "E-mail", "Dados", "Editar", "Deletar"]
    this.httpService = new HttpService()
    this.urlService = new UrlService()
  }

  async componentDidMount() {
    const { clientUrl } = this.urlService
    const { data } = await this.httpService.get(clientUrl())
    console.log(data)
    this.setState({ clients: data })
  }

  render() {
    const { clients } = this.state
    return (
      <div>
        <Table headerTH={this.headerTable} body={clients} />
      </div>
    )
  }
}

export default Client
