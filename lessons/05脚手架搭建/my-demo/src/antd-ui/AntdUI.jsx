import { Component } from "react";
import { DatePicker } from 'antd';
export default class AndtUI extends Component {
  state = {
    date: "",
  };
  // handleChangeDate = (value) =>{
  //     console.log(value);
  //     message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
  // }
  render() {
    //const { date } = this.state;
    return (
      <>
        <h2>React PC端UI库 antd 演示</h2>
        <DatePicker/>
        {/* <ConfigProvider locale={zhCN}>
          <div style={{ width: 400, margin: "100px auto" }}>
            <DatePicker onChange={this.handleChangeDate} />
            <div style={{ marginTop: 16 }}>
              当前日期：{date ? date.format("YYYY年MM月DD日") : "未选择"}
            </div>
          </div>
        </ConfigProvider> */}
      </>
    );
  }
}
