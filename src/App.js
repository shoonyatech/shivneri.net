import React from "react";
import { Route, Switch, } from "react-router-dom";
import HomePage from "./components/Home/Home";
import LogIn from "./components/SignIn/SignIn";
import LogOut from "./components/SignOut/SignOut";
import Header from "./components/common/Header"
import PageNotFound from "./components/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LogIn} />
        <Route path="/logout" component={LogOut} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
