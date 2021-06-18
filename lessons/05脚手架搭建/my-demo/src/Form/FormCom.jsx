import { Component, Fragment } from "react";

export default class FormCom extends Component {
  state = {
    val: "hello",
    sex: "1",
    cityList: ["北京", "上海", "深圳"],
    city: "北京",
    likeList: [
      {
        name: "看书",
        checked: true,
      },
      {
        name: "爬山",
        checked: false,
      },
      {
        name: "运动",
        checked: false,
      },
    ],
    sgin: "我很懒，没有签名！",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { val, sex, city, likeList, sgin } = this.state;
    const like = likeList
      .map((item) => {
        if (item.checked) return item.name;
      })
      .filter((item) => {
        return item;
      });

    console.log({ val, sex, city, like, sgin });
  };
  handleChangeValue = (e) => {
    this.setState({ val: e.target.value });
  };
  handleChangeSex = (e) => {
    this.setState({ sex: e.target.value });
  };
  handleChangeCity = (e) => {
    this.setState({ city: e.target.value });
  };
  handleChangeLike = (index) => {
    const { likeList } = this.state;
    likeList[index].checked = true;
    this.setState({ likeList });
  };
  handleChangeSgin = (e) => {
    this.setState({ sgin: e.target.value });
  };
  render() {
    const { val, sex, cityList, city, likeList, sgin } = this.state;
    return (
      <>
        <h2>受控表单演示</h2>
        <form action={"https://www.baidu.com/"}>
          昵称：
          <input type="text" value={val} onChange={this.handleChangeValue} />
          <br />
          <br />
          性别：
          <input
            type="radio"
            value={"1"}
            checked={sex === "1"}
            onChange={this.handleChangeSex}
          />{" "}
          男
          <input
            type="radio"
            value={"0"}
            checked={sex === "0"}
            onChange={this.handleChangeSex}
          />{" "}
          女
          <br />
          <br />
          城市：
          <select value={city} onChange={this.handleChangeCity}>
            {cityList.map((item, index) => {
              return (
                <option value={item} key={index} checked={item === city}>
                  {item}
                </option>
              );
            })}
          </select>
          <br />
          <br />
          爱好：
          {likeList.map((item, index) => {
            return (
              <Fragment key={index}>
                <input
                  type="checkbox"
                  value={item.name}
                  id={"like" + index}
                  checked={item.checked}
                  onChange={() => {
                    this.handleChangeLike(index);
                  }}
                />
                <label htmlFor={"like" + index}>{item.name}</label>
              </Fragment>
            );
          })}
          <br />
          <br />
          签名：
          <textarea
            value={sgin}
            cols="30"
            rows="5"
            onChange={this.handleChangeSgin}
          ></textarea>
          <br />
          <br />
          <input type="submit" onClick={this.handleSubmit} />
        </form>
      </>
    );
  }
}
