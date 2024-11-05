import React, { Component } from "react";
import Display from "./Display";
import Hook from "./Hook";

class App extends Component {
  
  state = {
    firstName: "alina",
    age: 20,
    employee: [
      { id: 1, designation: "developer" },
      { id: 2, designation: "manager" },
    ],
    isLogged: false,
  };

  handleUpdate = () => {
    this.setState({
      firstName: "harry",
    });
  };

  render() {
    return (
      <>
        {/* conditional rendering */}
        {this.state.isLogged ? (
          <Display
            firstName={this.state.firstName}
            employee={this.state.employee}
          />
        ) : (
          <Hook />
        )}

        <button onClick={this.handleUpdate}>Update</button>
      </>
    );
  }
}

export default App;
