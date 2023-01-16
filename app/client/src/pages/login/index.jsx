import React from "react"
import Input from "../../components/input"
import Button from "../../components/button"

function Login() {
  return (
    <div>
      <form>
        <Input name="login-name" type="text" placeholder="Name"></Input>
        <Input name="login-name" type="password" placeholder="Password"></Input>
        <Button type="submit">Login</Button>
      </form>
    </div>
  )
}

export default Login
