import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import MessageBox from "./messageBox";
import Navbar from "./navbar";

class Chatroom extends Component {
  state = {};
  componentDidMount() {
    this.interval = setInterval(() => this.props.fetchMessages(), 1000);
  }
  componentWillMount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <Navbar title={this.props.chatroomName} />
        <ul>
          {this.props.messages.map(msg => (
            <li>
              <MessageBox
                key={msg.id}
                from={msg.from}
                content={msg.content}
                date={msg.time}
              />
            </li>
          ))}
        </ul>
        <textarea className="form-control textarea" id="inpTextareaId" />
        <button
          className="btn btn-primary m-4"
          onClick={this.props.sendMessage}
        >
          Send
        </button>
      </div>
    );
  }
}

export default Chatroom;
