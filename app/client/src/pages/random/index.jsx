import React, { Component } from "react"
import HttpService from "../../service/HttpService"
import UrlService from "../../service/UrlService"
import Button from "../../components/button"
import not_found from "../../assets/image/not_found.png"
import Header from "../../components/header"

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
        <Header />
        <div className="border shadow-2xl rounded max-w-[500px] min-h-[500px] mx-auto bg-white p-8">
          <Button
            className="border w-full my-5 py-2 bg-green-700 hover:bg-green-800  text-white rounded"
            onClick={(event) => this.handleClick(event)}
          >
            Refresh
          </Button>
          <img src={url} alt="" className="object-cover h-full w-full" />
        </div>
      </div>
    )
  }
}

export default Random
