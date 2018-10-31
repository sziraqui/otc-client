import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./card";

class MessageBox extends Component {
  state = {};
  render() {
    return (
      <Card>
        <span className="badge badge-light">{this.props.from}</span>
        <p>{this.props.content}</p>
        <h6>{this.props.date}</h6>
      </Card>
    );
  }
}

export default MessageBox;
