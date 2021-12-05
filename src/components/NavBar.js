import Boton from "./Boton";
import { Link } from 'react-router-dom';
import Login1 from "./Login1";

const NavBar = (props) =>{ 
return (
  <nav id="navbar" className="navbar ">
    <ul>
      <li><Link to="/" className="active">{ props.titulo1 }</Link></li>
      <li><Link to="/contactenos">{ props.titulo2 }</Link></li>
      <li><a href="team.html">{ props.titulo3 }</a></li>
      <li className="dropdown"><a href="none"><span>{ props.titulo4 }</span> <i className="bi bi-chevron-down"></i></a>
        <ul>
          <li className="dropdown"><a href="none"><span>{ props.titulo5 }</span> <i className="bi bi-chevron-right"></i></a>
            <ul>
              <li><a href="none">{ props.titulo6 }</a></li>
              <li><a href="none">{ props.titulo7 }</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li >
        <Link to="/registro"> 
        <Boton title="Registrarse" clase="btn btn-primary btn-sm m-1" />
        </Link>
      </li>
    </ul>
    <ul>
      <li >
        <Link to="/Ingresar"> <Boton title="Inciar Sesión" clase="btn btn-primary btn-sm m-1" />
        </Link>
      </li>
    </ul>

    <ul>
      <li >
        <Login1 />
      </li>
    </ul>

    <i className="bi bi-list mobile-nav-toggle"></i>
  </nav>
);
}

export default NavBar;