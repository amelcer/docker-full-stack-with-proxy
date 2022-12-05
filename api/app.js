const express = require('express')
const app = express()
const port = 6969

app.get('/api/test', (req, res) => {
    console.log("REQUEST", req)
  res.send('Hello from server!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})