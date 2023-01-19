import React, { Component } from "react"
import HttpService from "../../service/HttpService"
import UrlService from "../../service/UrlService"

class StatusCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: "",
      statusCode: "",
    }
    this.httpService = new HttpService()
    this.urlService = new UrlService()
  }

  async handleChange(event) {
    const { catStatusCode } = this.urlService
    const url = catStatusCode(event.target.value)
    this.setState({ statusCode: event.target.value, url })
  }

  render() {
    const { url, statusCode } = this.state
    return (
      <div>
        <select
          name="select-status"
          value={statusCode}
          onChange={(event) => {
            this.handleChange(event)
          }}
        >
          <option value={""}>Selecione</option>
          <option value="100">Continue</option>
          <option value="101">Switching Protocols</option>
        </select>
        <img src={url} alt="" />
      </div>
    )
  }
}

export default StatusCode
