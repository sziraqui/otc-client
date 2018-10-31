import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./card";
import Navbar from "./navbar";

class Login extends Component {
  state = {};

  render() {
    return (
      <div>
        <Navbar title="OneTimeChat" />

        <Card>
          <div
            className="validate-input m-b-23"
            data-validate="Chat room name is required"
          >
            <span className="p-2">Chat room name</span>
            <input
              className="m-2"
              type="text"
              name="chatRoomName"
              id="chatroomNameTagId"
              placeholder="Type your chat room name"
            />
          </div>
          <div className="m-b-23">
            <span className="p-2">Username</span>
            <input
              className="m-2"
              type="text"
              name="username"
              id="usernameTagId"
              placeholder="set one or stay anonymous"
            />
          </div>
          <div className="m-0">
            <span className="p-2">Passkey</span>
            <input
              className="m-2"
              type="password"
              name="passkey"
              id="passkeyTagId"
              placeholder="passkey will protect your chats"
            />
          </div>
          <div className="text-center p-t-20 p-b-20">
            <span>If no passkey is provided, your chats will be public!</span>
          </div>
          <div className="m-0">
            <div className="m-0">
              <div className="m-0" />
              <button
                onClick={() => this.props.handleLogin()}
                className="btn btn-primary"
              >
                Create
              </button>
            </div>
          </div>
          <div className="text-center p-t-32 p-b-32">
            <span>OR join existing chat room</span>
          </div>
          <div className="m-0">
            <div className="m-0">
              <div className="m-0" />
              <button
                onClick={() => this.props.handleLogin()}
                className="btn btn-primary"
              >
                Join
              </button>
            </div>
          </div>
          <div className="text-center p-t-20 p-b-20">
            <span>A passkey maybe required</span>
          </div>
        </Card>
      </div>
    );
  }
}

export default Login;
