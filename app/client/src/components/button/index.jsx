import React from "react"

function Button({
  children,
  type,
  onClick,
  value,
  placeholder,
  className,
  disabled,
}) {
  return (
    <button
      name={children}
      type={type}
      onClick={onClick}
      value={value}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
