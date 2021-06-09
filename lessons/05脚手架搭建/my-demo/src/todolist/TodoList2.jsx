import { Component } from "react";
import AddTodo from "./components/AddTodo";
import List from "./components/List";

/**改造版
 * 组件化,组件通信
 */
export default class TodoList2 extends Component {
  state = {
    inputVal: "",
    list: ["看书", "刷头条", "睡觉"],
  };
  changeInputVal = (e) => {
    this.setState(
      {
        inputVal: e.target.value,
      },
      () => {
        console.log(this.state.inputVal);
      }
    );
  };
  addTodo = () => {
    const { inputVal, list } = this.state;
    this.setState({
      list: [...list, inputVal],
      inputVal: "",
    });
  };
  delTodoItem = (index) => {
    const { list } = this.state;
    list.splice(index, 1);
    this.setState(
      {
        list: list,
      },
      () => {
        console.log(this.state.list);
      }
    );
  };
  render() {
    const { inputVal, list } = this.state;
    return (
      <>
        <h2>todolist2</h2>
        <AddTodo
          inputVal={inputVal}
          changeInputVal={this.changeInputVal}
          addTodo={this.addTodo}
          len={list.length}
        />
        <List list={list} delTodoItem={this.delTodoItem} />
      </>
    );
  }
}
