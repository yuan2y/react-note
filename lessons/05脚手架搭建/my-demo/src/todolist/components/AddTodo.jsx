import { Component } from "react";

export default class AddTodo extends Component {
  changeInputVal = (e) => {
      const {changeInputVal} = this.props
      changeInputVal(e)
  };
  addTodo = ()=>{
    const {addTodo} = this.props
    addTodo()
  }
  render() {
    const { inputVal, len } = this.props;
    return (
      <>
        <input type="text" value={inputVal} onChange={this.changeInputVal} />
        <button onClick={this.addTodo}>add({len})</button>
      </>
    );
  }
}
