import React from 'react';
import ReactDOM from 'react-dom';
// import TodoMVC from './components/TodoMVC'
// import MFragment from './components/MFragment';
// import HandleClick from './components/HandleClick';
// import HandleDom from './components/HandleDom';
// import Parents from './components/Parents'
// import TodoList from './todolist/TodoList';
// import TodoList2 from './todolist/TodoList2';
// import TodoList3 from './todolist3/TodoList3'
import Com from './lifecycle/Com';


ReactDOM.render(
  <React.StrictMode>
    <Com/>
    {/* <TodoMVC/>  */}
    {/* <TodoList/>
    <TodoList2/>
    <TodoList3/>
    <MFragment/>
    <HandleClick title ='事件'/>
    <HandleDom/>
    <Parents/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
