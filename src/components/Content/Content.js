import React, { Component } from "react";
import SignIn from "../SignIn/SignIn";
import Home from "../Home/Home";
import SignOut from "../SignOut/SignOut";
import App from "../App/App";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Content extends Component {
  render() {
    return (
      <>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
      </>
    );
  }
}

export default Content;
