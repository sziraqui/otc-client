import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <header>
        <h1 id="full-name">{this.props.title}</h1>
      </header>
    );
  }
}

export default Navbar;
