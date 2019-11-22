import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

class Facebook extends Component {
  state = {
    isLoggedIn: "",
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    try {
      this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      });
    } catch {
      console.log("err");
    }
  };

  componentClick = response => {
    console.log(response);
  };

  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = (
        <div>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          <div>Email:{this.state.email}</div>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="559872811195038"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClick}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}

export default Facebook;
