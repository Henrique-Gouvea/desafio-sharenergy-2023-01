import React from "react"

function HeadTable({ headerTH }) {
  return (
    <thead clasName="table-header">
      <tr className="table-header-row">
        {headerTH.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  )
}

export default HeadTable
