import NavBar from "./NavBar";
const listaNavBar = {
  titulo1: "inicio",
  titulo2: "Contactenos",
  titulo3:"Team",
  titulo4:"Tramites",
  titulo5: "Predios",
  titulo6: "Asociar Predios",
  titulo7: "Asociar Pagos"
}

const Header = ()=>(
     < header id="header" className="d-flex align-items-center" >
     <div className="container d-flex justify-content-between align-items-center">

       <div className="logo">
         <h1><a href="index.html">Huila</a></h1>
         </div>
         
       <NavBar { ...listaNavBar } />
     </div>
   </header >
)
export default Header;