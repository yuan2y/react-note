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
```
<></>是<React.Fragment><React.Fragment/>的语法糖
```





































