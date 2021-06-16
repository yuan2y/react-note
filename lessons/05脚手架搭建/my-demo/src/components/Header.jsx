import React, { Component } from "react";
export default class Header extends Component {
  state = {
    inputTxt: "",
  };
  render() {
    const { inputTxt } = this.state;
    const { addTodo } = this.props;
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          defaultValue={inputTxt}
          onKeyUp={addTodo}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}
