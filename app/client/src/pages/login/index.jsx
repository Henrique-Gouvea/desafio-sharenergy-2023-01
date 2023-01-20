import React, { Component } from "react"
import Input from "../../components/input"
import Button from "../../components/button"
import HttpService from "../../service/HttpService"
import UrlService from "../../service/UrlService"
import { Navigate } from "react-router-dom"

class Login extends Component {
  state = {
    username: "",
    password: "",
    isChecked: false,
    user: null,
    error: null,
  }
  httpService = new HttpService()
  urlService = new UrlService()

  async handleChecked() {
    this.setState({ isChecked: !this.state.isChecked })
  }

  async handleClick(event) {
    event.preventDefault()

    const { loginUserUrl } = this.urlService
    const { username, password } = this.state
    const response = await this.httpService.post(loginUserUrl(), {
      username,
      password,
    })
    console.log(response.data.token)
    if (response.status === 200) {
      this.setState({ user: username })
    } else {
      this.setState({ error: response.data.message })
    }
  }

  render() {
    const { username, password, isChecked, user, error } = this.state
    return (
      <div>
        {user && <Navigate to="/users" />}
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
        {error && <p>{error}</p>}
      </div>
    )
  }
}

export default Login
