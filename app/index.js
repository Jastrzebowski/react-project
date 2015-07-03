import React from "react"
import Greeting from "./greeting"

export default class Index extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <title>Webpack + React</title>
        </head>
        <body><Greeting name={this.props.name}/></body>
        <script src="http://localhost:9090/app.js"></script>
      </html>
    )
  }
}
