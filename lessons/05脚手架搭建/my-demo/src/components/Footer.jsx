import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    const { len,delAll } = this.props;
    return (
      <footer className="footer">
        {/* This should be `0 items left` by default */}
        <span className="todo-count">
          <strong>{len}</strong> item left
        </span>
        {/* Remove this if you don't implement routing */}
        {/* Hidden if no completed items are left ↓ */}
        <button className="clear-completed" onClick={delAll}>Clear completed</button>
      </footer>
    );
  }
}
