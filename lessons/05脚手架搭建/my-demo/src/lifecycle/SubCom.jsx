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
        console.log("3-01-componentWillUnmount-SubCom卸载");
    }
}