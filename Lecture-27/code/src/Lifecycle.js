import React, { Component } from "react";
import axios from "axios";

class Lifecycle extends Component {
  //initialization
  constructor(props) {
    super(props);
    //creating state
    this.state = {
      name: "alex",
      users: [],
    };
  }

  // Mounting & Updation
  static getDerivedStateFromProps = (props, state) => {
    console.log(state);
  };

  //   (Imp)
  componentDidMount = () => {
    //API Calls
    try {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        console.log(res.data);
        this.setState({
          users: res.data,
        });
      });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  //   Updation (updating state)
  handleUpdate = () => {
    this.setState({
      name: "alina",
    });
  };

  //optimization (Imp)
  shouldComponentUpdate = (nextProps, nextState) => {
    // condition statement
    return true;
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    return "get Snapshot";
  };

  //   (Imp)
  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log("component Did Update", prevState, snapshot); //notification
  };

  //   Unmounting
  //   componentWillUnmount = () => {
  //     ele.removeListener();
  //     clearTimeout();
  //   };

  render() {
    return (
      <>
        {this.state.name}
        <button onClick={this.handleUpdate}>Update</button>
      </>
    );
  }
}

export default Lifecycle;
