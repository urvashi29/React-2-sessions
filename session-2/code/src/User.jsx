import React, { Component } from "react";

// class based component
class User extends Component {
  state = {
    firstName: "Alex",
    lastName: "joe",
    age: 20,
  };

  handleUpdate = () => {
    //to update

    // this is referring to User
    this.setState({
      age: 24,
      firstName: "Alina",
    });
  };

  render() {
    console.log(this.props);
    const { person } = this.props;

    return (
      <>
        <p>
          Hi, My name is {this.state.firstName} {this.state.lastName} and age is{" "}
          {this.state.age}
        </p>
        <p>{person.name}</p>

        <button onClick={this.handleUpdate}>Update</button>
      </>
    );
  }
}

export default User;

{
  /* <button onclick="addToCart()"></button> */
}
