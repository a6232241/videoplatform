"use strict"

var fs = require('fs')
var path = require('path')
var express = require('express')
const PORT = process.env.PORT || 8080

var app = express()
app.use(express["static"](path.resolve(__dirname, './dist')))
app.get('*', function (req, res) {
  var html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
  res.send(html)
})
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})