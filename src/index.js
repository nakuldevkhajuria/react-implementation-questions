import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyContext from './Questions/UseContext/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
const nanu  = [
  {
    name:'nakul',
    class:'8th',
    rollno:'21',
    data:'this data is coming from index.js'
  }
]

;
root.render(

  <React.StrictMode>
    <MyContext.Provider value={nanu} >
    <App />
  </MyContext.Provider>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
