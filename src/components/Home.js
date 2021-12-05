import React from 'react'
import TopBar from './components/TopBar';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Main from './components/Main';
import SobreNosotros from './components/SobreNosotros';
import ContenedorInfo from './components/ContenedorInfo';

const Home = () => (
          <div>
            <TopBar />
            <Header />
            <Carousel />
            <ContenedorInfo />
            < main id="main" >
              <Main />
              <SobreNosotros />      
            </main >
            <Footer />
          </div >
        );
  
export default Home;
