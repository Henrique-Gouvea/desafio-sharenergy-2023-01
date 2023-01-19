import React from "react"
import BodyTable from "../bodyTable"
import HeadTable from "../headTable"

function Table({ headerTH, body }) {
  return (
    <table className="table">
      <HeadTable headerTH={headerTH} />
      <BodyTable body={body} />
    </table>
  )
}

export default Table
