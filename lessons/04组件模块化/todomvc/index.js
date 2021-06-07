class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="todoapp">
          <Header />
          {/* This section should be hidden by default and shown when there are todos */}
          <Main />
          {/* This footer should be hidden by default and shown when there are todos */}
          <Footer/>
        </section>
        <Info />
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
