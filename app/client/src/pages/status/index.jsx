import React, { Component } from "react"
import HttpService from "../../service/HttpService"
import UrlService from "../../service/UrlService"
import httpStatus from "../../helpers/httpStatus"
import not_found from "../../assets/image/not_found.png"
const NOT_FOUND = ["598", "505", "449", "428", "208", "205"]

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

  async handleChange({ target: { value } }) {
    const image_exist = NOT_FOUND.some((not_f) => not_f === value)
    if (!image_exist) {
      const { catStatusCode } = this.urlService
      const url = catStatusCode(value)
      this.setState({ statusCode: value, url })
    } else {
      this.setState({
        statusCode: value,
        url: not_found,
      })
    }
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
          {httpStatus.map((status) => (
            <option key={status.status} value={status.status}>
              {status.message}
            </option>
          ))}
        </select>
        <img src={url} alt="" />
      </div>
    )
  }
}

export default StatusCode
