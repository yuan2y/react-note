import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoMVC from './components/TodoMVC'
import MFragment from './components/MFragment';
import HandleClick from './components/HandleClick';
import HandleDom from './components/HandleDom';


ReactDOM.render(
  <React.StrictMode>
    <TodoMVC/>
    <MFragment/>
    <HandleClick title ='事件'/>
    <HandleDom/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
