import React, { Component,createElement } from "react";
import ReactDOM from "react-dom";
import {
  ConfigProvider,
  DatePicker,
  message,
  Tabs,
  Comment,
  Tooltip,
  Avatar,
} from "antd";
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/lib/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import "antd/dist/antd.css";
import "./index.css";

moment.locale("zh-cn");

class App extends Component {
  state = {
    date: "",
    tabList: ["首页", "留言", "关于"],
    likes:0,
    dislikes:0,
    action:'liked'

  };
  handleChange = (value) => {
    message.info(
      `您选择的日期是: ${value ? value.format("YYYY年MM月DD日") : "未选择"}`
    );
    this.setState({ date: value });
  };

  callback = (key) => {
    console.log(key);
  };
  like = () =>{
    this.setState({likes:1,dislikes:0,action:'liked'})
  }
  dislike = () =>{
    this.setState({likes:0,dislikes:1,action:'disliked'})
  }
  render() {
    const { date, tabList,likes,dislikes,action } = this.state;
    const { TabPane } = Tabs;
    const actions = [
      <Tooltip key="comment-basic-like" title="Like">
        <span onClick={this.like}>
          {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
        </span>
      </Tooltip>,
      <Tooltip key="comment-basic-dislike" title="Dislike">
        <span onClick={this.dislike}>
          {React.createElement(
            action === "disliked" ? DislikeFilled : DislikeOutlined
          )}
          <span className="comment-action">{dislikes}</span>
        </span>
      </Tooltip>,
      <span key="comment-basic-reply-to">Reply to</span>,
    ];
    return (
      <>
        <h2>React PC端UI库 antd 演示</h2>
        <div style={{ width: "400px", border: "1px solid #eee" }}>
          <h3>DatePicker 日期选择</h3>
          <ConfigProvider locale={zhCN}>
            <div style={{ width: 400, margin: "100px auto" }}>
              <DatePicker onChange={this.handleChange} />
              <div style={{ marginTop: 16 }}>
                当前日期：{date ? date.format("YYYY年MM月DD日") : "未选择"}
              </div>
            </div>
          </ConfigProvider>
        </div>

        <div>
          <h3>Tabs 标签页</h3>
          <Tabs defaultActiveKey="0" onChange={this.callback}>
            {tabList.map((item, index) => {
              return (
                <TabPane tab={item} key={index}>
                  {item}
                </TabPane>
              );
            })}
          </Tabs>
        </div>

        <div>
          <h3>Comment 评论</h3>
          <Comment
            actions={actions}
            author={<a>Han Solo</a>}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
              </p>
            }
            datetime={
              <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
        </div>
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
