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
        //  console.log(res.data);
         this.setState({
           friends: res.data
         });
       })
       .catch(err => {
         console.log(err);
       });
  }

  addAFriend = (event )=> {
    event.preventDefault();;
      this.setState({
        newFriend: {
          ...this.state.newFriend,
          id: this.state.friends.length + 1
        }
      });

      axios
        .post('http://localhost:5000/friends', this.state.newFriend)
        .then(res => this.setState({friends:res.data}))
        .catch(err => console.log(err))

      this.setState({
        newFriend: {
          name: "",
          age: "",
          email: ""
        }
      });
  }

  friendHandler = (name, value) => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [name]: value
      }
    });
    
};

  render() {
    return (
      <div className="ui container">
        <Route path="/" component={Home} />
        <Route
          exact
          path="/"
          render={props => (
            <FriendList {...props} friends={this.state.friends} />
          )}
        />
        <Route
          exact
          path="/addfriend"
          render={Props => (
            <FriendForm
              {...Props}
              newFriend={this.state.newFriend}
              friendHandler={this.friendHandler}
              addAFriend={this.addAFriend}
            />
          )}
        />
      </div>
    );
  }
}
