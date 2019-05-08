import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1> Home Page - Wanana be my friend? :)</h1>
        <Link exact to="/friends">
          <button> Go see my friends list</button>
        </Link>
      </div>
    );
  }
}
