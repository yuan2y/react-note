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
