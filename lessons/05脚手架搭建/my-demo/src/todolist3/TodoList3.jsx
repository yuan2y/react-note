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