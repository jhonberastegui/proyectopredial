import './App.css';
import TopBar from './components/TopBar';
import Header from './components/Header';
import CardConImage from './components/CardConImage';
import Footer from './components/Footer';
/* import Estado from './components/Estado';
 */




function App5() {
  const cardUserInterno = [
  
    {id:1,
      image:"https://www.bayportcolombia.com/images/Noticias_2020/preguntas-comunes-sobre-impuesto-predial.jpg",
    title: "imagen card predios", 
    cardTitle:"PREDIOS",
    cardInformation:"Registre y gestiones la información de los predios y mantenga la información actualizada",
    link1 : "Login",
    nombreLink1:"Crear predio",
    link2:"Login",
    nombreLink2:"Gestionar Predio"
    },
  
    { id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS595AkmkxrRMXo4cu8Y1ORl6q0SWhowuioQ&usqp=CAU", 
      title: "imagen card cobros",
      cardTitle:"COBROS",
      cardInformation:"Realice todos los cobros anuales de predios registrados y genere multas o sanciones",
      nombreLink1: "Cobro Anual",
      link2: "Login",
      nombreLink2:"Multas o Sanciones"
    },
  
    { id: 3,
      image: "https://www.educaciontrespuntocero.com/wp-content/uploads/2020/09/626-978x652.jpg", 
      title:"imagen card predios",
      cardTitle:"FECHAS",
      cardInformation:"Programe fechas de pago máximo, fechas de descuento y establezca descuentos",
      link1: "",
      nombreLink1: "Gestionar Fechas",
      link2: "Login",
      nombreLink2: "Gestionar Descuentos"
    },
  
    { 
      id: 4,
      image: "https://astros.uniovi.es/wp-content/uploads/2020/01/convenio.jpg",
      title: "imagen card predios",
      cardTitle: "CONVENIOS",
      cardInformation: "Gestiones los convenios registrados en el sistema",
      link1: "",
      nombreLink1:"Gestionar Convenios"
    }
  ]
  return (
    <div>
      <TopBar />
      <Header />
      < main id="main" >
      
        <div className="ftco-section contact-section ftco-degree-bg container col-xs-12 col-sm-1 col-md-6 col-md-offset-1 mt-4 mb-4 p-3">
        <div className="row row-cols-1 row-cols-md-2 g-4">          
          <div className="col" align="center">
           <CardConImage 
           image="https://www.bayportcolombia.com/images/Noticias_2020/preguntas-comunes-sobre-impuesto-predial.jpg"
           title= "imagen card predios"
           cardTitle="PREDIOS"
           cardInformation="Registre y gestiones la información de los predios y mantenga la información actualizada"
           link1 = "Login"
           nombreLink1="Crear predio"
           link2="Login"
           nombreLink2="Gestionar Predio"
           />
        {/*     <Estado /> */}
          </div>
          <div className="col"align="center">
          <CardConImage cardUserInt = {cardUserInterno}  />
           
           </div>
          <div className="col" align="center">
          <CardConImage cardUserInt = {cardUserInterno}  />
          

          </div>
          <div className="col"align="center">
          <CardConImage cardUserInt = {cardUserInterno}  />
          </div>
        </div>
        </div>

      </main >
      <Footer />
    </div >
  );
}

export default App5;