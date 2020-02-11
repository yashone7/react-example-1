import React, { Fragment } from "react";

function Greeting(props) {
  return (
    <Fragment>
      <h2>Hello {props.name}!</h2>
    </Fragment>
  );
}

export default Greeting;
