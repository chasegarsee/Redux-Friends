import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FriendsListView from "./vews/FriendsListView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Yo Bruh</h1>
        <FriendsListView />
      </div>
    );
  }
}

export default App;
