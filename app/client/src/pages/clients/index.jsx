import React, { Component } from "react"
import HttpService from "../../service/HttpService"
import UrlService from "../../service/UrlService"
import CardUser from "../../components/cardUser"

class Client extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clients: "",
    }
    this.httpService = new HttpService()
    this.urlService = new UrlService()
  }

  async componentDidMount() {
    const { clientUrl } = this.urlService
    const { data } = await this.httpService.get(clientUrl())
    console.log(data.results)
    this.setState({ clients: data.results })
  }

  render() {
    const { clients } = this.state
    return (
      <div>
        {clients ? (
          clients.map((client) => (

          ))
        ) : (
          <></>
        )}
      </div>
    )
  }
}

export default Client
