import { Component } from "react";

export default class TodoList extends Component {
  state = {
    inputVal: "",
    list: ["看书", "刷头条", "睡觉"],
  };
  changeInputVal = (e) => {
      this.setState(
          {
              inputVal:e.target.value
          },
          ()=>{
              console.log(this.state.inputVal);
          }
      )
  };
  addTodo = ()=>{
      const {inputVal,list} = this.state
      this.setState({
          list:[...list,inputVal],
          inputVal:""
      })
  }
  delTodoItem = (index)=>{
    const {list} = this.state
    list.splice(index,1)
    this.setState({
        list:list
    },()=>{
        console.log(this.state.list);
    })
  }
  render() {
    const { inputVal, list } = this.state;
    return (
      <>
        <h2>todolist</h2>
        <input type="text" value={inputVal} onChange={this.changeInputVal} />
        <button onClick={this.addTodo}>add({list.length})</button>
        <ul>
            {
                list.map((item,index)=>{
                    return <li key={index} onClick={()=>{this.delTodoItem(index)}}>{item}</li>
                })
            }
        </ul>
      </>
    );
  }
}
