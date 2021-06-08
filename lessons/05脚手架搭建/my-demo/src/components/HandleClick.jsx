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
