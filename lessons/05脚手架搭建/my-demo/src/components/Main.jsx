import React,{Component} from 'react'
export default class Main extends Component {
  render() {
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label forhtml="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {/* These are here just to show the structure of the list items */}
          {/* List items should get the className `editing` when editing and `completed` when marked as completed */}
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" defaultChecked />
              <label>Taste JavaScript</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" defaultValue="Create a TodoMVC template" />
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Buy a unicorn</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" defaultValue="Rule the web" />
          </li>
        </ul>
      </section>
    );
  }
};
