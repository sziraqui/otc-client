import React, { Component } from "react";
import "./App.css";
import Login from "./components/login";
import Chatroom from "./components/chatroom";

class App extends Component {
  state = {
    username: "Guest",
    isAuthenticated: false,
    chatroomName: "OneTimeChat",
    messages: []
  };

  constructor(props, context) {
    super(props, context);
    this.loadUI = this.loadUI.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.fetchMessages = this.fetchMessages.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);
  }

  loadUI() {
    if (this.state.isAuthenticated) {
      return (
        <Chatroom
          key="chatroomId"
          messages={this.state.messages}
          title={this.state.chatroomName}
          fetchMessages={this.fetchMessages}
          sendMessage={() => this.sendMessage()}
        />
      );
    } else {
      return <Login handleLogin={() => this.handleLogin()} />;
    }
  }
  startChartRoom(status) {
    this.setState({
      username: status.username,
      isAuthenticated: status.isAuthenticated,
      chatroomName: status.chatroomName
    });
  }
  updateMessages(messages) {
    this.setState({
      username: this.state.username,
      isAuthenticated: this.state.isAuthenticated,
      chatroomName: this.state.chatroomName,
      passkey: this.state.passkey,
      messages: messages
    });
  }

  fetchMessages() {
    fetch(
      `http://localhost:5000/messages/${this.state.chatroomName}/${
        this.state.passkey
      }`
    )
      .then(res => res.json())
      .then(messages => this.updateMessages(messages))
      .catch(error => console.log(error.message));
  }

  handleLogin() {
    const chatroomName = document.getElementById("chatroomNameTagId").value;
    const username = document.getElementById("usernameTagId").value;
    const passkey = document.getElementById("passkeyTagId").value;
    console.log("form data", chatroomName, username, passkey);
    fetch(
      `http://localhost:5000/join-room/${chatroomName}/${username}/${passkey}`
    )
      .then(res => res.json())
      .then(user => this.setCurrentUser(chatroomName, passkey, user))
      .catch(err => console.log(err.message));
  }

  setCurrentUser(chatroomName, passkey, user) {
    if (user.isAuthenticated) {
      this.setState({
        username: user.name,
        isAuthenticated: true,
        chatroomName: chatroomName,
        passkey: passkey,
        messages: this.state.messages
      });
    }
  }

  sendMessage() {
    const content = document.getElementById("inpTextareaId").value;
    console.log("content", content);
    fetch(
      `http://localhost:5000/new-message/${this.state.chatroomName}/${
        this.state.username
      }/${this.state.passkey}/${content}`
    )
      .then(res => res.json())
      .then(messages => this.updateMessages(messages))
      .catch(err => console.log(err.message));
    document.getElementById("inpTextareaId").value = "";
  }

  render() {
    return <div className="App">{this.loadUI()}</div>;
  }
}

export default App;
