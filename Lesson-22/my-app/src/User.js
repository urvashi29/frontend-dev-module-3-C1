import React, { Component } from "react";

// class based component
export default class User extends Component {
  state = {
    firstName: "alina",
    age: 20,
    city: "pune",
    contact: {
      email: "admin@gmail.com",
    },
    favColors: ["pink", "green"],
  };

  handleUpdate = () => {
    // this referring to User

    //to update in class based
    this.setState({
      firstName: "harry",
      city: "mumbai",
    });
  };

  render() {
    return (
      //jsx
      <div>
        <p>{this.color}</p>
        <p>Name: {this.state.firstName} </p>
        <p>Age: {this.state.age}</p>
        <p>City: {this.state.city}</p>
        <p>Contact: {this.state.contact.email}</p>
        <p>
          {this.state.favColors.map((item) => {
            return <p>{item}</p>;
          })}
        </p>

        <button onClick={this.handleUpdate}>Update</button>
      </div>
    );
  }
}

// reconciliation process

//<button onclick="fun()">Update</button>

