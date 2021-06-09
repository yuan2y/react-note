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