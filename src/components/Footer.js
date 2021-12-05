import { Link } from 'react-router-dom';

const Footer = ()=>(
    <footer id="footer">

        <div className="footer-newsletter">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h4>¡Registrarse aqui!</h4>
                <p>Registrese son su email y mantenga su predio al día</p>
              </div>
              <div className="col-lg-6">
                <form action="" method="post">
                  <input type="email" name="email" />
                  <Link to="/registro"><input type="submit" value="Registrarse" /></Link>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-4 col-md-6 footer-links">
                <h4>Links de acceso</h4>
                <ul>
                <li>
                    <Link to="/">
                      <i className="bx bx-chevron-right"></i> 
                      <a href="none">Inicio</a>
                      </Link>
                      </li>
                  
                  <li>
                    <Link to="/Login">
                      <i className="bx bx-chevron-right"></i> 
                      <a href="none">Iniciar Sesión</a>
                      </Link>
                      </li>
                  <li>
                    <Link to="/Contactenos">
                      <i className="bx bx-chevron-right"></i> 
                      <a href="none">Contáctenos</a>
                      </Link>
                      </li>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Team</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Trámites</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Política de privacidad</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-contact">
                <h4>Contáctenos</h4>
                <p>
                <strong>Dirección:</strong> carrera 4 Calle 8 Esquina Neiva - Huila - Colombia <br />
                <strong>Horario:</strong> Lunes a Viernes de 8:00 a.m. a 4:00 p.m.<br />
                Horario: Lunes a Viernes de 8:00 a.m. a 4:00 p.m.
                <strong>Linea Nacional:</strong> 01 8000 968 716 <br />
                  <strong>Nit:</strong> 800.103.913-4 <br />
                  <strong>Email: </strong> notificaciones.judiciales@huila.gov.co<br />
                </p>

              </div>

              <div className="col-lg-4 col-md-6 footer-info">
                <h3>Gobernación de Huila</h3>
                <p>Este es el Portal de Gestión Catastral de la Gobernación del Huila, un espacio donde usted podrá realizar en línea y encontrar información de todos los trámites y servicios que la entidad ofrece para que usted pueda mantener su impuesto predial al día.</p>
                <div className="social-links mt-3">
                  <a href="none" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="none" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="none" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="none" className="google-plus"><i className="bx bxl-skype"></i></a>
                  <a href="none" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Gobernación de Huila</span></strong>.Todos los derechos reservados
          </div>
          <div className="credits">
            Diseño: Grupo 11 Equipo8
          </div>
        </div>
      </footer>
)
export default Footer;