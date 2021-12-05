import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'
import App5 from './App5'



import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/registro" element={<App2 />} />
        <Route path="/Contactenos" element={<App3 />} />
        <Route path="/Login" element={<App4 />} />
        <Route path="/ingreso" element={<App5 />} />




      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
