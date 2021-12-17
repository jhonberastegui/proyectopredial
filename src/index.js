import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import Dashboard from './components/Dashboard';

import './index.css';

import Layout from './components/Layout'


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';
import Formulario from './components/Formulario';
import Contactenos from './components/Contactenos';
import Ingresar from './components/Ingresar';
import SesionUserInterno from './components/SesionUserInterno';
import Predios from './components/Predios';
import Gestiones from './components/Gestiones';
import NotFound from './components/NotFound';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/registro" element={<Formulario />} />
          <Route exact path="/Contactenos" element={<Contactenos />} />
          <Route exact path="/Ingresar" element={<Ingresar />} />
          <Route exact path="/UserInterno" element={<SesionUserInterno />} />
          <Route exact path="/Predios" element={<Predios />} />
          <Route exact path="/Gestiones" element={<Gestiones />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route path= "*" element = {<NotFound />} />        
        </Routes>
      </Layout>
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
