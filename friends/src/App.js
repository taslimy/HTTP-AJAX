import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Friend from "./components/Friend";
import Home from "./components/Home";
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


  // https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/friend" component={Friend} />
      </div>
    );
  }
}
