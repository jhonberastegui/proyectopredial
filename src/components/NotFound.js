import React from 'react';
import Boton from "./Boton";
import { Link } from 'react-router-dom';
import  Error404  from '../assets/img/Error404.jpg';

const NotFound = () => (
<div className="container display-flex" align="center"  >

      <img src={ Error404} className="d-block w-100" alt="..." />
      <Link to= "/" className="no-Decoration " ><Boton clase="btn btn-warning " title="Regresar al inicio" /></Link>
  

</div>
  
)

export default NotFound;