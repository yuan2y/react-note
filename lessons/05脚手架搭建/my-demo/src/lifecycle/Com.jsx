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