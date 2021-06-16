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
#### 1、无状态组件
```jsx
const date = '20210602'
    let ele = (
        <div>
            <h1>hello react {date}</h1>  
        </div> 
    )
 ReactDOM.render(ele,document.getElementById('app'))
        
```
#### 2、函数组件 无法被react监听state状态 
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
#### 3、类组件 
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
#### 1、 空标签与React.Fragment的作用
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
#### 2、 事件绑定方式
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

#### 3、 操作dom的方式
1、 ref方式：ref字符串、ref箭头函数、React.CreateRef()

2、 reactDOM.findDomNode

3、原生方式，框架中不推荐使用
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
    //ref 将要被废弃 字符串
    HandleDom3 = ()=>{
        const {title2} = this.refs
        title2.style.background='red'
    }
    //ref 变量 箭头函数
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


#### 4、组件通信

1、**父子组件**  子组件通过props接收父组件的数据

Parents.jsx
```jsx
import React, { Component } from "react";
import Child from "./Child";
export default class Parents extends Component {
    state = {
        msg:"组件通信-父子组件",
        list:['vue','react','angular']
    }
    render(){ 
        const {list} = this.state
        return <>
            <h2>我是父组件</h2>
            <Child title='父->子传值' list={list}/>
            <Child title='555' list={['html','css','js']}/>
        </>
    }
}

```

Child.jsx
```jsx
import { Component } from "react";

export default class Child extends Component {
  render() {
    console.log(this.props);
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
        </ul>
      </>
    );
  }
}

```

2、**子父组件**  通过子组件事件触发父组件的方法执行
Parent.js
```jsx
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

```
Child.jsx
```jsx
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

```

3、**兄弟组件**  todolist案例

TodoList3.jsx
```jsx
import { Component } from "react";
import TxtInput from "./components/TxtInput";
import TxtOutput from "./components/TxtOutput";

export default class TodoList3 extends Component{
    state = {
        list:[]
    }
    addTxt = (txt)=>{
        const {list} = this.state
        this.setState({
            list:[...list,txt]
        },()=>{
            console.log(this.state.list);
        })
    }
    delTxtItem = (index)=>{
        const {list} = this.state
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
    render(){
        const {list} = this.state
        return(
            <>
                <h2>todolist3</h2>
                <TxtInput addTxt ={this.addTxt}/>
                {
                    list && <TxtOutput list={list} delTxtItem = {this.delTxtItem}/>
                }
                
            </>
        )
    }
}
```

TxtInput.jsx
```jsx
import { Component } from "react";

export default class TxtInput extends Component {
  state = {
    txt: ""
  };
  changeTxtVal = (e)=>{
      this.setState({
          txt:e.target.value
      },
      ()=>{
          console.log(this.state.txt);
      })
  }
  addTxt = ()=>{
      const {addTxt} = this.props
      const {txt} = this.state
      addTxt(txt)
      this.setState({txt:''})
  }
  render() {
      const {txt} = this.state
    return (
      <div>
        <input type="text" value={txt} onChange={this.changeTxtVal}/>
        <button onClick={this.addTxt}>向父组件发送数据</button>
      </div>
    );
  }
}

```

TxtOutput.jsx
```jsx
import { Component } from "react";

export default class TxtOutput extends Component{
    delTxtItem = (index)=>{
        const {delTxtItem} = this.props
        delTxtItem(index)
    }
    render(){
        const {list} = this.props
        return(
            <ul>
                {
                    list.map((item,index)=>{
                        return <li key={index} onClick={()=>{this.delTxtItem(index)}}>{item}</li>
                    })
                }
            </ul>
        )
    }
}
```

4、**todolist案例**
TodoMVC.jsx
```jsx
import React, { Component, Fragment } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Info from "./Info";
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
```
Header.jsx
```jsx
import React, { Component } from "react";
export default class Header extends Component {
  state = {
    inputTxt: "",
  };
  render() {
    const { inputTxt } = this.state;
    const { addTodo } = this.props;
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          defaultValue={inputTxt}
          onKeyUp={addTodo}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

```
Main.jsx
```jsx
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

```
Footer.jsx
```jsx
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

```

#### 5、组件生命周期

> 挂载阶段、更新阶段、卸载阶段

##### 旧版生命周期

![img](https://user-gold-cdn.xitu.io/2019/12/15/16f0a0b3df44f29c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



Com.js

```JSX
import { Component } from "react";
import SubCom from "./SubCom";

export default class Com extends Component{
    constructor(props){
        super(props)
        this.state = {
            msg:"旧生命周期函数演示",
            arr:['vue','ract','agular'],
            isShow:true
        }
        console.log("1-01-constructor");
    }
    handleChangeArr = ()=>{
        const {arr} = this.state
        arr.push(Math.random()*100)
        this.setState({arr:arr})
    }
    handleUnmountSubCom = ()=>{
        this.setState({isShow:false})
    }
    componentWillMount(){
        console.log("1-02-componentWillMount");
    }
    render(){
        console.log("1-03-render-Com组件");
        const {msg,arr,isShow} = this.state
        return(
            <>
                <h2>{msg}</h2>
                <button onClick={this.handleChangeArr}>改变subCom的数据</button>
                <button onClick={this.handleUnmountSubCom}>卸载subCom组件</button>
                <br />
                <br />
                <br />
                {
                    isShow && <SubCom list={arr}/>
                }
                
            </>
        )
    }
    componentDidMount(){
        //可以获取dom,一般进行数据请求
        console.log("1-04-componentDidMount");
    }
   
}
```



SubCom.jsx

```jsx
import { Component } from "react";

export default class SubCom extends Component{
    constructor(props){
        super(props)
        this.state = {
            msg:"SubCom组件生命周期"
        }
    }
    componentWillReceiveProps(){
        console.log("2-01-componentWillReceiveProps");
    }
    shouldComponentUpdate(){
        console.log("2-02-shouldComponentUpdate");
        return true
    }
    componentWillUpdate(){
        console.log("2-03-componentWillUpdate");
    }
    render(){
        console.log("2-04-render-SubCom组件");
        const {msg} = this.state
        const {list} = this.props
        return (
            <>
                <h3>{msg}</h3>
                <ul>
                    {
                        list.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </>
        )
    }
    componentDidUpdate(){
        console.log("2-04-compoentDidUpdate");
    }
    componentWillUnmount(){
        console.log("3-01-componentWillUnmount");
    }
}
```



##### 洋葱模型

![image.png](https://user-gold-cdn.xitu.io/2019/12/15/16f0a0b3e1f4f59f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

##### 新版生命周期

![img](https://user-gold-cdn.xitu.io/2019/12/15/16f0a0b3e20fa9aa?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



**getDerivedStateFromProps(nextProps,prevState)**

接收父组件传递过来的 `props` 和组件之前的状态，返回一个对象来更新 `state` 或者返回 `null` 来表示接收到的 `props` 没有变化，不需要更新 `state

**该生命周期钩子的作用：** 将父组件传递过来的 `props` **映射** 到子组件的 `state` 上面，这样组件内部就不用再通过 `this.props.xxx` 获取属性值了，统一通过 `this.state.xxx` 获取。映射就相当于拷贝了一份父组件传过来的 `props` ，作为子组件自己的状态。注意：子组件通过 `setState` 更新自身状态时，不会改变父组件的 `props`

配合 `componentDidUpdate`，可以覆盖 `componentWillReceiveProps` 的所有用法

**该生命周期钩子触发的时机：**

- 在 React 16.3.0 版本中：在组件实例化、接收到新的 `props` 时会被调用

- 在 React 16.4.0 版本中：在组件实例化、接收到新的 `props` 、组件状态更新时会被调用

  

**getSnapshotBeforeUpdate(prevProps, prevState)`**

接收父组件传递过来的 `props` 和组件之前的状态，此生命周期钩子必须有返回值，返回值将作为第三个参数传递给`componentDidUpdate ` 必须和 `componentDidUpdate` 一起使用，否则会报错

**该生命周期钩子触发的时机** ：被调用于 `render` 之后、更新 `DOM` 和 `refs` 之前

**该生命周期钩子的作用：** 它能让你在组件更新 `DOM` 和 `refs` 之前，从 `DOM` 中捕获一些信息（例如滚动位置）

配合 `componentDidUpdate`, 可以覆盖 `componentWillUpdate` 的所有用法

**参考借鉴**

+ [你真的了解 React 生命周期吗 https://juejin.cn/post/6844904021233238024](https://juejin.cn/post/6844904021233238024)














