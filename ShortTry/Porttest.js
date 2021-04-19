const express = require('express')
const host = "lbbawebtest1.azurewebsites.net"
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, host, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})