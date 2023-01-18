import React, { Component } from "react"
import HttpService from "../../service/HttpService"
import UrlService from "../../service/UrlService"
// import { Navigate } from "react-router-dom"

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: "",
    }
    this.httpService = new HttpService()
    this.urlService = new UrlService()
  }

  async componentDidMount() {
    const { randomUser } = this.urlService
    const { data } = await this.httpService.get(randomUser(10))
    console.log(data)
    this.setState({ users: data.results })
  }

  render() {
    const { users } = this.state
    return (
      <div>
        {users ? (
          users.map((user) => (
            <div>
              <p>Nome</p>
              <p>{user.name.first}</p>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    )
  }
}

export default Users
