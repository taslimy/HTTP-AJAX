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
      },
      updated: false
    };
  }

  // make sure shit updates
  componentDidUpdate(prevProps, prevState) {
    if (prevState.updated !== this.state.updated) {
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
  }

  // React this.setState is not a function
  // https://stackoverflow.com/questions/31045716/react-this-setstate-is-not-a-function

  // So i needed the state changed but ti wasn't doing it the same time as the button so i created this to the update got time to process. i know i'm supposed to do prevState but it wasn't working.

  updatedState2 = () => {
    this.setState({
      updated: !this.state.updated
    });
  };

  updatedState = e => {
    e.preventDefault();
    setTimeout(this.updatedState2, 10);
  };

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

  addAFriend = event => {
    event.preventDefault();
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        id: this.state.friends.length + 1
      }
    });

    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push("/");
      })
      .catch(err => console.log(err));

    this.setState({
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    });
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    // console.log(id, 'hello')
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  friendHandler = event => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value
      }
    });
  };

  editToggler = e => {
    e.preventDefault();
    this.setState({
      clicked: !this.state.clicked
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
            <FriendList
              {...props}
              deleteFriend={this.deleteFriend}
              friends={this.state.friends}
              updateFriend={this.state.updateFriend}
              toggle={this.editToggler}
              clicked={this.state.clicked}
              updatedState={this.updatedState}
            />
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
