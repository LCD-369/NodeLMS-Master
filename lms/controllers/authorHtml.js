var routes = require('express').Router()
var path = require('path')

routes.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../routes/admin.html'))
})

module.exports = routes
