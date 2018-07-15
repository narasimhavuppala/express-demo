const express = require('express')
const app = express()

app.use(express.static('public'))
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.send('hello world!')
})

app.post('/', (req, res) => {
  res.send('got a post request')
})

app.put('/user', (req, res) => {
  res.send('got a put request at /user')
})

app.delete('/user', (req, res) => {
  res.send('got a delete request at /user')
})

const server = app.listen(3000, () => {
  const host = server.address().address
  const port = server.address().port

  console.log(`example app listening at http://${host}:${port}`)
})