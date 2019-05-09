import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class FriendList extends Component {
  render() {
    return (
      <Fragment>
        <div className="ui container">
          <section className="flex-card">
            {this.props.friends.map(friend => (
              <div className="ui card">
                <div class="ui placeholder">
                  <div class="square image" />
                </div>
                <div className="content">
                  <div className="header">{friend.name}</div>
                </div>
                <div className="content">
                  <div className="description">
                    <p> Age: {friend.age} </p>
                    <p>
                      Email: <strong>{friend.email}</strong>
                    </p>
                  </div>
                </div>
                <div className="extra content">
                  <button className="ui negative button">
                    Delete Friend
                  </button>
                </div>
              </div>
            ))}
          </section>
        </div>
      </Fragment>
    );
  }
}
