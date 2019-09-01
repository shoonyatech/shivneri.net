import React, { Component } from "react";
import "./App.scss";
import SignIn from "../SignIn/SignIn";
import SignOut from "../SignOut/SignOut";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Content from "../Content/Content";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Content />
      </>
    );
  }
}

export default App;
