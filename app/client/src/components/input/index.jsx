import React from "react"

function Input({ name, type, onChange, value, placeholder, className }) {
  return (
    <input
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={className}
    />
  )
}

export default Input
