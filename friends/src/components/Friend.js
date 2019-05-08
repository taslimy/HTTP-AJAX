import React, { Component } from 'react'

export default class Friend extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        <h1> Friend page</h1>
        <form>
          <input type="text" placeholder="add a friend :)"/>
        </form>
      </div>
    );
  }
}
