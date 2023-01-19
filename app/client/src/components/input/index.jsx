import React from "react"

function Input({
  name,
  type,
  onChange,
  value,
  placeholder,
  className,
  disabled,
}) {
  return (
    <input
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
    />
  )
}

export default Input
