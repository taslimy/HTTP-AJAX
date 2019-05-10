import React, { Component } from "react";
import axios from "axios";

export default class Friend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateFriend: {
        name: "",
        age: "",
        email: ""
      },
      clicked: false
    };
  }

  

  friendUpdateHandler = event => {
    this.setState({
      updateFriend: {
        ...this.state.updateFriend,
        [event.target.name]: event.target.value
      }
    });
  };

  updateAFriend = event => {
    event.preventDefault();
    console.log(this.state.updateFriend);
    axios
      .put(
        `http://localhost:5000/friends/${this.props.friend.id}`,
        this.state.updateFriend
      )
      .then(res => {
        this.setState({
          clicked: !this.state.clicked
        });
        console.log(res)
        // this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };


  
  editToggler = e => {
    e.preventDefault();
    this.setState({
      clicked: !this.state.clicked
    });
  };

  // the fk but it works!
functionBoss(event){
  event.preventDefault();
  return (
 this.updateAFriend(event),
 this.props.updatedState(event)
 )
}
  render() {
    const update = (
      <div className="ui container">
        <div className="ui form">
          <div className="ui message">
            <div className="header">To Become a Friend!</div>
            <p>
              All you have to do is full out the form below. Then, click on{" "}
              <strong>Current Friends</strong> see if you have been added.
            </p>
          </div>
          <form onSubmit={this.props.updateAFriend}>
            <div className="field">
              <label>First Name & Last Name</label>
              <input
                placeholder="First Name & Last Name"
                type="text"
                name="name"
                onChange={this.friendUpdateHandler}
                value={this.state.updateFriend.name}
              />
            </div>

            <div className="field">
              <label>Age</label>
              <input
                placeholder="Age"
                type="text"
                name="age"
                onChange={this.friendUpdateHandler}
                value={this.state.updateFriend.age}
              />
            </div>

            <div className="field">
              <label>Email</label>
              <input
                placeholder="example@gmail.com"
                type="text"
                name="email"
                onChange={this.friendUpdateHandler}
                value={this.state.updateFriend.email}
              />
            </div>
            <button
              onClick={(event) => this.functionBoss(event)}
              className="ui positive button"
            >
              Update Friend
            </button>
            <button onClick={this.editToggler} className="ui positive button">
              Cancel
            </button>
          </form>
        </div>
      </div>
    );

    const friends = (
      <div className="ui card">
        <div class="ui placeholder">
          <div class="square image" />
        </div>
        <div className="content">
          <div className="header">{this.props.friend.name}</div>
        </div>
        <div className="content">
          <div className="description">
            <p> Age: {this.props.friend.age} </p>
            <p>
              Email: <strong>{this.props.friend.email}</strong>
            </p>
          </div>
        </div>
        <div className="extra content">
          <button
            onClick={e => this.props.deleteFriend(e, this.props.friend.id)}
            className="ui negative button"
          >
            Delete Friend
          </button>
          <button onClick={this.editToggler} className="ui positive button">
            Edit a Friend
          </button>
        </div>
      </div>
    );
    return <div>{this.state.clicked ? update : friends}</div>;
  }
}
