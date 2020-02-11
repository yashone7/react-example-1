import React, { Component, Fragment } from "react";

class Counter extends Component {
  render() {
    return (
      <Fragment>
        <h2>Hello {this.props.name}</h2>
      </Fragment>
    );
  }
}

export default Counter;
