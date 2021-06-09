import React, { Component } from "react";
import Child from "./Child";
export default class Parents extends Component {
  state = {
    msg: "组件通信-父子组件",
    list: ["vue", "react", "angular"],
  };
  handleData = (res,e) => {
    //res是接收子组件传过来的数据
    this.setState({list:res})
  };
  render() {
    const { list } = this.state;
    return (
      <>
        <h2>我是父组件</h2>
        <Child title="父->子传值" list={list} fn={this.handleData} />
        <Child title="测试" list={['html','css','js']} fn={this.handleData} />
      </>
    );
  }
}
