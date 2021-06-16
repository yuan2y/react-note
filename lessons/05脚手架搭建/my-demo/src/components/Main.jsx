import React, { Component } from "react";
export default class Main extends Component {
  render() {
    const { todo, delTodo } = this.props;
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label forhtml="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todo.map((item, index) => {
            return (
              <li key={index} className="completed">
                <div className="view">
                  <input className="toggle" type="checkbox" defaultChecked />
                  <label>{item}</label>
                  <button
                    className="destroy"
                    onClick={() => {
                      delTodo(index);
                    }}
                  ></button>
                </div>
                <input
                  className="edit"
                  defaultValue="Create a TodoMVC template"
                />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
