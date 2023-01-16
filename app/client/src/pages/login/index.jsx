import React, { Component } from "react"
import Input from "../../components/input"
import Button from "../../components/button"

class Login extends Component {
  state = {
    username: "",
    password: "",
    isChecked: false,
  }

  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked })
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
            <label id="remember-label" onChange={() => this.handleChecked()}>
              Remember Me
            </label>
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    )
  }
}

export default Login
