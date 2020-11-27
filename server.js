const express = require("express")
const app = express()

app.get("/posts", (req, res) => {})

app.listen(4000, () => {
  console.log("server is on port 4000")
})
