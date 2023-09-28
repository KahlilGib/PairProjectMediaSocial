const express = require('express')
const app = express()
const port = 3000

app.set("view engine","ejs")

app.get('/registration', (req, res) => {
  res.render('registration')
})

app.get('/login', (req, res) => {
    res.render('login')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
