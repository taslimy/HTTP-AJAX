import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="ui menu">
          <div className="header item">Friends App</div>
          <Link exact to="/" className="item">
            Current Friends
          </Link>
          <Link exact to="/addfriend" className="item">
            Become a Friend
          </Link>
        </div>
      </div>
    );
  }
}
