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
      <div className="container mx-auto px-4 py-10 space-y-8">
        <div className="border shadow-2xl rounded max-w-[400px] w-full mx-auto bg-white p-8">
          {user && <Navigate to="/users" />}
          <form className="max-w-[400px] w-full mx-auto bg-white p-4">
            <h2 className="text-4xl font-bold text-center py-6">Login</h2>
            <div className="flex flex-col py-2">
              <label>Name</label>
              <Input
                id="login-name"
                type="text"
                placeholder="Name"
                value={username}
                onChange={(event) =>
                  this.setState({ username: event.target.value })
                }
                className="w-full bg-gray-50 border border-gray-300 focus:border-green-800 rounded px-2 py-1 text-sm text-gray-800 placeholder-gray-300 focus:outline-none"
              ></Input>
            </div>
            <div className="flex flex-col py-2">
              <label>Password</label>
              <Input
                id="login-password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) =>
                  this.setState({ password: event.target.value })
                }
                className="w-full bg-gray-50 border border-gray-300 focus:border-green-800 rounded px-2 py-1 text-sm text-gray-800 placeholder-gray-300 focus:outline-none"
              ></Input>
            </div>
            <div>
              <Input
                type="checkbox"
                name="remember"
                checked={isChecked}
                onChange={() => this.handleChecked()}
              />
              <label id="remember-label" className="mr-2">
                Remember Me
              </label>
            </div>
            <Button
              className="border w-full my-5 py-2 bg-green-700 hover:bg-green-800  text-white rounded"
              onClick={(event) => this.handleClick(event)}
            >
              Login
            </Button>
          </form>
          {error && <p>{error}</p>}
        </div>
      </div>
    )
  }
}

export default Login
