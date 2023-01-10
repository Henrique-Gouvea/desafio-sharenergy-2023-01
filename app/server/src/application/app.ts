import express from "express"

const app = express()
app.use(express.json())

app.use("/login", () => console.log("Henrique"))

export default app
