import React from "react"

import express from "express"
import greeting from "app/greeting"

var app = express()

app.get("/", function(req, res) {
  // React.renderToString takes your component
  // and generates the markup
  // Output html rendered by react
  res.send(
    "<html><head><meta charset='utf-8'/><title>Webpack + React</title></head><body>" +
    React.renderToString(React.createElement(greeting, {time: Date.now()})) +
    "</body><script src='http://localhost:9090/app.js'></script></html>"
    )
  // res.render("index.ejs", {
  //   "reactOutput": React.renderToString(React.createFactory(component))
  // })

})

var server = app.listen(1234, function () {

  var port = server.address().port

  console.log("Example app listening at http://localhost:%s", port)

})
