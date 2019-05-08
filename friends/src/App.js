import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import FriendForm from "./components/FriendForm";
import FriendList from "./components/FriendList";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // Add a friend button idk where to go from here.... xd
  addAFriend = event => {
    event.preventDefault();
    this.setState({
      newFriend: {
        // ID has to be unique so lets just add to it maybe idk
        ...this.state.newFriend,
        id: this.state.friends.length + 1
      }
    });

    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));

    this.setState({
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    });
  };

  // https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/friends"
          render={props => (
            <FriendList {...props} friends={this.state.friends} />
          )}
        />
        <Route
          exact
          path="/addfriend"
          render={Props => (
            <FriendForm {...Props} addAFriend={this.addAFriend} />
          )}
        />
      </div>
    );
  }
}
