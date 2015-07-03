import React from "react"

export default class Greeting extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1 className="greeting">
        Rendered: {this.props.time}!
      </h1>
    )
  }
}
