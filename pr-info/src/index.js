import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const domContainer = document.getElementById("#projInfo");

function hover(element, enter, leave) {
  element.addEventListener("mouseenter", enter);
  element.addEventListener("mouseleave", leave);
}

hover(
  document.querySelectorAll(".project-link"),
  (e) => {
    // On hover
    ReactDOM.render(
      <App />, domContainer);
    console.log("Hovering");
  },
  (e) => {
    // On exit hover
    return  ReactDOM.render(
        <p/>, domContainer);
  }
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
