// Стадии жизненного цикла компонента
// Пример с потерей контекста на onClick

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Hello, World!",
      text: "Hello!"
    };
    console.log(1);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log(3);
  }

  componentWillUnmount() {
    console.log(5);
  }

  handleClick() {
    this.setState(
      (state) => ({
        value:
          state.value === "Hello, World!" ? "Good Bye World!" : "Hello, World!",
        text: state.text === "Hello!" ? "Bye!" : "Hello!"
      }),
      () => {
        console.log(4);
      }
    );
  }

  render() {
    console.log(2);
    return (
      <div>
        <h1>{this.state.value}</h1>
        <button onClick={this.handleClick}>{this.state.text}</button>
      </div>
    );
  }
}

export default App;
