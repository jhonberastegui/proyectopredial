import React from 'react'
import './App.css'
import Carousel from './components/Carousel';
import Main from './components/Main';
import SobreNosotros from './components/SobreNosotros';
import ContenedorInfo from './components/ContenedorInfo';


const App = () => (
  <div>
    <Carousel />
    <ContenedorInfo />
    < main id="main" />
    <Main />
    <SobreNosotros />
  </div>
);

export default App;
