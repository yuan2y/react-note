import React, { Component, Fragment } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Info from "./Info";
// import "todomvc-common/base.css";
// import "todomvc-app-css/index.css";
export default class TodoMVC extends Component {
  render() {
    return (
      <>
        <section className="todoapp">
          <Header /> 
          <Main />
          <Footer />
        </section>
        <Info />
      </>
    );
  }
}
