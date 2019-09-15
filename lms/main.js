var bodyParser = require('body-parser')
var express = require('express')
var path = require('path')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header("Access-Control-Allow-Methods", "*")
  next()
})

// parse application/json
app.use(bodyParser.json())

app.use(require('./controllers/authorController'))

app.use(require('./controllers/authorHtml'))

app.use(express.static(path.join(__dirname, '/public')))

app.listen(3000)
console.log('Server running in port: 3000 ...')

module.exports = app
