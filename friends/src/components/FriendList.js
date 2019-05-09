import React, { Component, Fragment } from "react";
import axios from "axios";
import "../App.css";

export default class FriendList extends Component {
 state = {
    friends: null
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/${this.props.match.params.id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  deleteAFriend= e => {
    e.preventDefault();
    this.props.deleteAFriend(this.state.friends.id);
  };

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
                  <button
                    onSubmit={this.deleteAFriend}
                    className="ui negative button"
                  >
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
