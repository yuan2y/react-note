[TOC]

# react-note
react是一个声明式，高效且灵活的用于**构建用户界面**的`JavaScript`库。

## JSX语法
> 声明式、简单、直接声明所有的dom元素和属性 **在 JSX 语法中，你可以在大括号内放置任何有效的 JavaScript 表达式**

## 引用react
1、 通过cdn本地资源加载

2、 通过yarn或npm包管理工具加载


## react脚手架
```js
//第一步
npm i create-react-app -g
//第二步
create-react-app my-demo|项目名称
//第三步
cd my-demo
//第四步
npm start
//看到localhost:3000 的启动页面
```
## 元素渲染
1、 条件判断 三目运算符

2、 事件绑定(自执行，行内函数，独立函数) 如：onClick onKeyUp 
 

## 組件&props

### 组件基础
1、无状态组件
```jsx
const date = '20210602'
    let ele = (
        <div>
            <h1>hello react {date}</h1>  
        </div> 
    )
 ReactDOM.render(ele,document.getElementById('app'))
        
```
2、函数组件 无法被react监听state状态 
```jsx
//函数组件 命名规则，方法名首字母大写
function CrateTitle(props){
        const {value} = props
        return (
            <div>
                <h2>>{value}</h2>
            </div>
            
        )
    } 
 ReactDOM.render(<CrateTitle value="我是函数组件"/>,document.getElementById('app'))
        
```
3、类组件 
```jsx
class CrateHeader extends React.Component {
        //不写构造函数，默认会创建构建函数并自执行
        constructor(porps) {
            //写构造函数的目的，就是向this添加自定义属性
            //必须要写super(porps) 继承父组件
            super(porps)         
            //自定义属性，state如果不去定义，默认就会有一个空的
            this.state={
                msg:"888"
            }
        }
        render(){
            const {value} = this.props
            const {msg} = this.state
            return (
                <div>
                    <h2>{value}-{msg}</h2>    
                </div>
            )       
        }
    }
    ReactDOM.render(<CrateHeader value="我是class组件"/>,document.getElementById('app'))
```

### 组件模块化
1、ES6模块化导入导出

2、组件模块化：**复用** 独立状态 接收props渲染视图

3、练习： todomvc-app-template   

```js
//jsx允许在模板里 插入 js变量
//使用{}  数字、字符串、表达式、及时函数、数组

//有些关键字不能直接使用,切记单标签一定要闭合
class => className={'string'}
style => style={{}}
value => defaultValue
for   => htmlFor
focus => autoFocus
```
### 组件进阶
1、 空标签与React.Fragment的作用
`<></>是<React.Fragment><React.Fragment/>的语法糖`
```jsx
import { Component, Fragment } from "react";

export default class MFragment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "我是React.Fragmmnet标签",
      list: ["vue", "react", "angular"],
    };
  }
  handleEmptyTag() {
    return (
      <>
        <td>我是空标签1</td>
        <td>我是空标签2</td>
      </>
    );
  }
  handleFragmentTag(){
      //这种情况就需要使用Fragment,因为需要绑定key
      const {list} = this.state
      return list.map((item,index)=>{
          return <Fragment key={index}>
              <p>React</p>
              <h4>Vue</h4>
          </Fragment>

      })
  }
  render() {
    const { msg, list } = this.state;
    return (
      <div>
        <h2>{msg}</h2>
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <table>
          <tbody>
            <tr>{this.handleEmptyTag()}</tr>
          </tbody>
        </table>
        <div>
            {this.handleFragmentTag()}
        </div> 
      </div>
    );
  }
}
```
2、 事件绑定方式
```jsx
import { Component } from "react";

export default class HandleClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "我是事件绑定",
      list: ["vue", "react", "angular"],
      isShow: false,
    };
    this.HandleClick3 = this.HandleClick3.bind(this);
  }
  HandleClick1() {
    //无法获取到this
    console.log(this);
  }
  HandleClick2(msg, e) {
    console.log(msg, e, this);
  }

  HandleClick3(e) {
    console.log(e, this);
  }
  HandleClick4 = (e) => {
    console.log(e, this);
  };
  HandleClick5 = (msg) => {
    console.log(msg, this);
  };
  HandleClick6 = () => {
    // this.setState(
    //   (state, props) => {
    //     console.log(state, props);
    //     return {
    //       isShow: !state.isShow,
    //     };
    //   },
    //   () => {
    //     console.log("我是setState回调的state", this.state);
    //   }
    // );
    this.setState(
      {
        isShow: !this.state.isShow,
      },
      () => {
        console.log("我是setState回调的state", this.state);
      }
    );
  };

  render() {
    const { msg, isShow } = this.state;
    return (
      <>
        <h3>{msg}</h3>
        <p>
          <button onClick={this.HandleClick1}>事件1 一般使用</button>
        </p>
        <p>
          <button onClick={this.HandleClick2.bind(this, "我是bind方式绑定")}>
            事件2 bind绑定 可以传参，可以获取event
          </button>
        </p>
        <p>
          <button onClick={this.HandleClick3}>
            事件3 不可传参 在constructor绑定
          </button>
        </p>
        <p>
          <button onClick={this.HandleClick4}>
            事件4 不可传参 可以获取event 函数表达式
          </button>
        </p>

        <p>
          <button
            onClick={() => {
              this.HandleClick5(msg);
            }}
          >
            事件5 可传参 不可以获取event 函数表达式
          </button>
        </p>

        <p>
          <button onClick={this.HandleClick6}>
            事件6 {isShow ? "NO" : "OFF"}
          </button>
        </p>
      </>
    );
  }
}

```

3、 操作dom的方式
```jsx
import React, { Component } from "react";
import ReactDOM from 'react-dom'
export default class HandleDom extends Component{
    constructor(props){
        super(props)
        this.state = {
            msg:'hello world'
        }
        this.oUl = React.createRef()
    }
    

    //直接操作，框架中不推荐使用
    HandleDom1 = ()=>{
        const title = document.querySelector('#title')
        title.style.background='hotpink'
    }
    //reactDOM.findDomNode 
    HandleDom2 = ()=>{
        const otitle = document.querySelector('#title')
        ReactDOM.findDOMNode(otitle).style.background='#f60'
    }
    //ref 将要被废弃
    HandleDom3 = ()=>{
        const {title2} = this.refs
        title2.style.background='red'
    }
    //ref 变量
    HandleDom4 = ()=>{
        this._oTitle.style.background='skyblue'
    }

    //React.CreateRef 官方推荐
    handleChange = (e)=>{
        this.setState({
            msg:e.target.value
        })
    }

    HandleDom5 = ()=>{
        // console.log(this.state.msg);
        // console.log(this.oUl);
        const {msg} = this.state
        this.oUl.current.innerHTML += `<li>${msg}</li>`
        this.setState({
            msg:'hello world'
        })
        //console.log(this.oUl.current.childNodes);
        this.oUl.current.childNodes.forEach((item,index) => {
            item.onclick = ()=>{
                //console.log(item);
                this.handleDel(item)
            }
        });
    }

    handleDel = (ele)=>{
        this.oUl.current.removeChild(ele)
    }
    render(){
        const {msg} = this.state
        return <>
            <h2 id="title">我是Dom1</h2>
            <button onClick={this.HandleDom1}>Dom1 原生</button>
            <button onClick={this.HandleDom2}>Dom2  findDOMNode</button>

            <h2 ref="title2">我是Dom3</h2>
            <button onClick={this.HandleDom3}>Dom3 ref</button>

            <h2 ref={ele=>this._oTitle=ele}>我是Dom4</h2>
            <button onClick={this.HandleDom4}>Dom4 ref变量</button>

            <hr />
            <input type="text" value={msg} onChange={this.handleChange} />
            <button onClick= {this.HandleDom5}>add</button>
            <br />
            <ul ref={this.oUl}> 

            </ul>
            
        </>
    }
}
```




































