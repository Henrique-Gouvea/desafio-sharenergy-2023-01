import React, { Component } from "react"
import Input from "../../components/input"
import Button from "../../components/button"
import HttpService from "../../service/HttpService"

class Login extends Component {
  state = {
    username: "",
    password: "",
    isChecked: false,
  }
  httpService = new HttpService()

  async handleChecked() {
    console.log("teste")
    this.setState({ isChecked: !this.state.isChecked })
  }

  async handleClick(event) {
    event.preventDefault()
    console.log("henrique")
    console.log(this.state.isChecked)
    console.log(this.state.username)

    // console.log(this.username)
  }

  render() {
    const { username, password, isChecked } = this.state
    return (
      <div>
        <form>
          <Input
            id="login-name"
            type="text"
            placeholder="Name"
            value={username}
            onChange={(event) =>
              this.setState({ username: event.target.value })
            }
          ></Input>
          <Input
            id="login-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          ></Input>
          <div>
            <Input
              type="checkbox"
              name="remember"
              checked={isChecked}
              onChange={() => this.handleChecked()}
            />
            <label id="remember-label">Remember Me</label>
          </div>
          <Button onClick={(event) => this.handleClick(event)}>Login</Button>
        </form>
      </div>
    )
  }
}

export default Login
