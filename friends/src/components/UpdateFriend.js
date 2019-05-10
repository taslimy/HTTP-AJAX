import React, { Component } from "react";

export default class FriendForm extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui form">
          <div className="ui message">
            <div className="header">To Become a Friend!</div>
            <p>
              All you have to do is full out the form below. Then, click on{" "}
              <strong>Current Friends</strong> see if you have been added.
            </p>
          </div>
          <form onSubmit={this.props.addAFriend}>
            <div className="field">
              <label>First Name & Last Name</label>
              <input
                placeholder="First Name & Last Name"
                type="text"
                name="name"
                onChange={e => {
                  return this.props.friendHandler(
                    e.target.name,
                    e.target.value
                  );
                }}
                value={this.props.newFriend.name}
              />
            </div>

            <div className="field">
              <label>Age</label>
              <input
                placeholder="Age"
                type="text"
                name="age"
                onChange={e => {
                  return this.props.friendHandler(
                    e.target.name,
                    e.target.value
                  );
                }}
                value={this.props.newFriend.age}
              />
            </div>

            <div className="field">
              <label>Email</label>
              <input
                placeholder="example@gmail.com"
                type="text"
                name="email"
                onChange={e => {
                  return this.props.friendHandler(
                    e.target.name,
                    e.target.value
                  );
                }}
                value={this.props.newFriend.email}
              />
            </div>
            <button
              onClick={this.props.addAFriend}
              className="ui positive button"
            >
              Add a Friend
            </button>
          </form>
        </div>
      </div>
    );
  }
}
