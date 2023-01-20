import React from "react"
import { TableRow } from "@material-ui/core"

function HeadTable({ headerTH }) {
  return (
    <thead clasName="table-header">
      <TableRow className="table-header-row">
        {headerTH.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </TableRow>
    </thead>
  )
}

export default HeadTable
