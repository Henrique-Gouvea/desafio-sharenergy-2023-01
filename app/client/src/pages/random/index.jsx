import React, { Component } from "react"
import HttpService from "../../service/HttpService"
import UrlService from "../../service/UrlService"
import Button from "../../components/button"
import not_found from "../../assets/image/not_found.png"

class Random extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: "",
    }
    this.httpService = new HttpService()
    this.urlService = new UrlService()
  }

  async handleClick(event) {
    event.preventDefault()

    const { randomDogApi } = this.urlService
    const { url } = await this.httpService.getAPIFetch(randomDogApi())
    console.log(url)
    const verifyUrl = url.split(".").pop()
    if (verifyUrl === "mp4") {
      this.setState({ url: not_found })
    } else {
      this.setState({ url })
    }
  }

  render() {
    const { url } = this.state
    return (
      <div>
        <Button onClick={(event) => this.handleClick(event)}>Refresh</Button>
        <img src={url} alt="" />
      </div>
    )
  }
}

export default Random
