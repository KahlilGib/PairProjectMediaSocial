const express = require('express')
const app = express()
const port = 3000

app.set("view engine","ejs")

app.get('/', (req, res) => {
    res.redirect('/registration')
})

app.get('/registration', (req, res) => {
  res.render('registration')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/posting', (req, res) => {
    res.render('postpage')
})

app.get('/createprofile', (req, res) => {
    res.render('createprofile')
})
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
