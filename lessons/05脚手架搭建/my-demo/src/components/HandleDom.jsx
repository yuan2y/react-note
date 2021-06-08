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