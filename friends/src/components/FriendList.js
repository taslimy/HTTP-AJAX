import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class FriendList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <h1>Some Friends</h1>

        <Link to="/addfriend">
          <button>Wanna be my friend?</button>
        </Link>

        {this.props.friends.map(friend => (
          <section>
            <p>
              <h2>{friend.name}</h2>
            </p>
            <section>
              <p>
                age: <em>{friend.age}</em>
              </p>
            </section>
            <section>
              <p>
                email: <strong>{friend.email}</strong>
              </p>
            </section>
          </section>
        ))}
      </Fragment>
    );
  }
}
