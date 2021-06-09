import { Component } from "react";

export default class Child extends Component {
 changeList = ()=>{
     const {list,fn} = this.props
     const _list = list.reverse()
     fn(_list)
 }
  render() {
    const { title, list } = this.props;
    if (!(title && list && list.length)) {
      return <h4>请传入title，list参数</h4>;
    }
    return (
      <>
        <h2>我是子组件:{title}</h2>
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
          <button onClick={this.changeList}>改变父组件的数据</button>
        </ul>
      </>
    );
  }
}
