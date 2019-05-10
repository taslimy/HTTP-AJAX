import React, { Component, Fragment } from "react";
import Friend from './Friend';
import axios from "axios";
import "../App.css";

export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }




  render() {
    //  const { friends } = this.state;
    //  if (!this.state.friends) {
    //    return <h2>Loading friends. Ya Got None</h2>;
    //  }

    return (
      <Fragment>
        <div className="ui container">
          <section className="flex-card">
            {this.props.friends.map(friend => (
              <Friend
                key={friend.id}
                friend={friend}
                deleteFriend={this.props.deleteFriend}
                toggle={this.props.toggle}
                clicked={this.props.clicked}
                updatedState={this.props.updatedState}
              />
            ))}
          </section>
        </div>
        
      </Fragment>
    );
  }
}
