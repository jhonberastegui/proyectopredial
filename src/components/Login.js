import Boton from "./Boton";
import { Link } from 'react-router-dom';

const Login = () => (
    <div>
        <section className="login-block">
            <div className="container border border-secondary ">
                <div className="row">
                    <div className="col-md-4 login-sec mt-5">
                        <h2 className="text-center">Inciar Sesión</h2>
                        <form className="login-form">
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="text-uppercase">Nombre Usuario</label>
                                <input type="text" className="form-control" placeholder="" />

                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className="text-uppercase">Contraseña</label>
                                <input type="password" className="form-control" placeholder="" />
                            </div>


                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" />
                                    <small>Recordar Usuario</small>
                                </label>
                            </div>
                            <div align="center">
                            <Link to="/ingreso"><Boton title="Ingresar" clase="btn btn-primary m-2 "/></Link>
                            </div>
                        </form>

                    </div>
                    <div className="col-md-8 banner-sec">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            </ol>
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active">
                                    <img className="d-block img-fluid" src="https://wmtake.ru/wp-content/uploads/2021/05/klyuch-belagroprombank-3.jpg   " alt="First slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                  </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

)
export default Login;