import React from "react"

function CardUser({ user }) {
  return (
    <div className="flex justify-center p-2">
      <div className="rounded-lg shadow-lg bg-white w-96 h-96 p-1">
        <img
          src={user.picture.medium}
          className="mx-auto bg-gradient-to-b rounded-full w-80 h-80 relative overflow-hidden mt-10 md:h-20 md:w-20"
          alt="Picture user"
        />
        <div className="p-4">
          <p className="text-gray-700 text-base mb-4">
            Nome: {user.name.first + user.name.last}
          </p>
          <p class="text-gray-700 text-base mb-4">Idade: {user.dob.age}</p>
          <p class="text-gray-700 text-base mb-4">Email: {user.email}</p>
          <p class="text-gray-700 text-base mb-4">
            Username: {user.login.username}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardUser
