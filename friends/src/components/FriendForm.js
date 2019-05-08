import React, { Component } from "react";
import { Link } from "react-router-dom";

class FriendForm extends Component {
  render() {
    return (
      <section>
        <h2>Become my freand!</h2>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="age" placeholder="age" />
          <input type="text" name="email" placeholder="email" />
          <button>Add</button>
        </form>
        <Link to="/friends">
          <button>Back to my friends</button>
        </Link>
      </section>
    );
  }
}

export default FriendForm;
