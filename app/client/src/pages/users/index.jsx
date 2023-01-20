import React, { Component } from "react"
import HttpService from "../../service/HttpService"
import UrlService from "../../service/UrlService"
import CardUser from "../../components/cardUser"
import { RxDotFilled } from "react-icons/rx"

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: "",
      currentIndex: 0,
    }
    this.httpService = new HttpService()
    this.urlService = new UrlService()
  }

  async componentDidMount() {
    const { randomUser } = this.urlService
    const { data } = await this.httpService.get(randomUser(10))
    const { currentIndex } = this.state
    console.log(data.results[currentIndex])
    this.setState({ users: data.results })
  }

  goToUser = (userIndex) => {
    this.setState({ currentIndex: userIndex })
  }

  render() {
    const { users, currentIndex } = this.state
    return (
      <div>
        {users ? (
          <CardUser
            key={currentIndex}
            user={users[currentIndex]}
            onClick={() => this.goToUser(currentIndex)}
          >
            <RxDotFilled />
          </CardUser>
        ) : (
          <></>
        )}
        <div className="flex justify-center p-2">
          {users ? (
            users.map((_user, userIndex) => (
              <div
                key={userIndex}
                onClick={() => this.goToUser(userIndex)}
                className={
                  currentIndex === userIndex
                    ? "text-2xl bg-white cursor-pointer"
                    : "text-2xl cursor-pointer"
                }
              >
                <RxDotFilled />
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    )
  }
}

export default Users
