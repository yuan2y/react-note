import { Component } from "react";

export default class List extends Component {
  delTodoItem = (index) => {
    const { delTodoItem } = this.props;
    delTodoItem(index);
  };
  render() {
    const { list } = this.props;
    return (
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                this.delTodoItem(index);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    );
  }
}
