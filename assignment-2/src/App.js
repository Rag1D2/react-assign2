import React, { Component } from "react";

class App extends Component {
  state = {
    userInput: "",
  };

  inputHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  render() {
    const style = {
      marginTop: "25px",
      marginLeft: "25px",
    };
    return (
      <div className="App">
        <input
          style={style}
          type="text"
          onChange={this.inputHandler}
          value={this.state.userInput}
        />
        <p
          style={style}
        >
          {this.state.userInput}
        </p>
      </div>
    );
  }
}

export default App;
