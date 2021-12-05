import './App.css';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Formulario from './components/Formulario';


function App2() {
  return (
    <div>
      <TopBar />
      <Header />
      < main id="main" >
      <Formulario nameForm="Registro Nuevo Usuario"/>      
      </main >
      <Footer />
    </div >
  );
}

export default App2;