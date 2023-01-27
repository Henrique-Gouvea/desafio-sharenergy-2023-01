import React from "react"
import BodyTable from "../bodyTable"
import HeadTable from "../headTable"
import { Table } from "@material-ui/core"

function TableG({ headerTH, body }) {
  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      <div className="border shadow-2xl rounded max-w-[1000px] w-full mx-auto bg-white p-8">
        <Table className="table">
          <HeadTable headerTH={headerTH} />
          <BodyTable body={body} />
        </Table>
      </div>
    </div>
  )
}

export default TableG
