import Boton from "./Boton";
import '../App.css'
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav id="navbar" className="navbar ">
      <ul>
        <li><Link to="/" className="active no-Decoration" >{props.titulo1}</Link></li>
        <li><Link to="/contactenos" className="no-Decoration">{props.titulo2}</Link></li>
        <li className="dropdown m-3 no-Decoration"><span>{props.titulo4}</span> <i className="bi bi-chevron-down"></i>
          <ul>
              <li><Link to="/Ingresar" className="no-Decoration"> { props.titulo6 } </Link> </li>
              <li> <Link to="/Ingresar"className="no-Decoration"> { props.titulo7} </Link> </li>
    </ul>
      </li >
    </ul >
    <ul>
      <li >
        <Link to="/registro" className="no-Decoration"> 
        <Boton title="Registrarse" clase="btn btn-primary btn-sm m-1" />
        </Link>
      </li>
    </ul>
    <ul>
      <li >
        <Link to="/Ingresar" className="no-Decoration"> <Boton title="Inciar Sesión" clase="btn btn-primary btn-sm m-1" />
        </Link>
      </li>
    </ul>

    <i className="bi bi-list mobile-nav-toggle"></i>
  </nav >
);
}

export default NavBar;