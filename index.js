const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello World6!')
})
app.get('/test', (req, res) => {
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
