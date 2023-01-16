import React from "react"
import Input from "../../components/input"
import Button from "../../components/button"

function Login() {
  return (
    <div>
      <form>
        <Input id="login-name" type="text" placeholder="Name"></Input>
        <Input
          id="login-password"
          type="password"
          placeholder="Password"
        ></Input>
        <Button type="submit">Login</Button>
        <div>
          <Input type="checkbox" name="remember" checked={false} />
          <label id="remember-label">Remember Me</label>
        </div>
      </form>
    </div>
  )
}

export default Login
