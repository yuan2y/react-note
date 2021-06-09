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
