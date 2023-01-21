import React, { Component } from "react"
import HttpService from "../../service/HttpService"
import UrlService from "../../service/UrlService"
import httpStatus from "../../helpers/httpStatus"
import not_found from "../../assets/image/not_found.png"
import Select from "@material-ui/core/Select"
import Header from "../../components/header"
import { MenuItem } from "@material-ui/core"
const NOT_FOUND = ["598", "505", "449", "428", "208", "205"]

class StatusCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: "",
      statusCode: "Selecione",
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
        <Header />
        <div className="border shadow-2xl rounded max-w-[500px] min-h-[500px] mx-auto bg-white p-8">
          <Select
            name="select-status"
            value={statusCode}
            className="w-full"
            onChange={(event) => {
              this.handleChange(event)
            }}
          >
            <MenuItem value={"Selecione"}>Selecione</MenuItem>
            {httpStatus.map((status) => (
              <MenuItem key={status.status} value={status.status}>
                {status.message}
              </MenuItem>
            ))}
          </Select>
          <img src={url} alt="" />
        </div>
      </div>
    )
  }
}

export default StatusCode
