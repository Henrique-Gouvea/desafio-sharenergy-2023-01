import React, { Component } from "react"
import HttpService from "../../service/HttpService"
import UrlService from "../../service/UrlService"
import CardUser from "../../components/cardUser"

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
    console.log(data.results)
    this.setState({ users: data.results })
  }

  render() {
    const { users } = this.state
    return (
      <div>
        {users ? (
          users.map((user) => (
            <CardUser key={user.login.username} user={user} />
          ))
        ) : (
          <></>
        )}
      </div>
    )
  }
}

export default Users
