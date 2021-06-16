import React, { Component, Fragment } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";
export default class TodoMVC extends Component {
  state = {
    todo: ["vue", "react"],
  };
  addTodo = (e) => {
    const { keyCode, target } = e;
    if (keyCode !== 13) return; //回车键
    const inputTxt = target.value.trim();
    if (inputTxt === "") return; //空值
    const { todo } = this.state;
    if (todo.includes(inputTxt)) {
      //已存在的值
      alert("该值已存在");
      return;
    }
    this.setState({ todo: [...todo, inputTxt] }, () => {
      console.log(this.state.todo);
    });
  };
  delTodo = (index) => {
    const { todo } = this.state;
    todo.splice(index, 1);
    this.setState({ todo: todo }, () => {
      console.log(this.state.todo);
    });
  };
  delAll = () => {
    this.setState({ todo: [] }, () => {
      console.log(this.state.todo);
    });
  };
  render() {
    const { todo } = this.state;
    return (
      <>
        <Header addTodo={this.addTodo} />
        {todo.length>0 && <Main todo={todo} delTodo={this.delTodo} />}
        <Footer len={todo.length} delAll={this.delAll} />
      </>
    );
  }
}
