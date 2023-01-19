import React from "react"

function CardUser({ user }) {
  return (
    <div>
      <img src={user.picture.medium} alt="Picture user" />
      <p>Nome: {user.name.first + user.name.last}</p>
      <p>Idade: {user.dob.age}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.login.username}</p>
    </div>
  )
}

export default CardUser
