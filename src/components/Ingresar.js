import Boton from "./Boton";
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import ModalLogin from './ModalLogin'


const Ingresar = () => {
    // Crear objetos del formulario
    const [usrtxt, setUsrtxt] = useState('');
    const [pwdtxt, setPwdtxt] = useState('');
    const [errtxt, setErrtxt] = useState('');

    const usrCambio = (event) => {
        setUsrtxt(event.target.value)
    }

    const pwdCambio = (event) => {
        setPwdtxt(event.target.value)
    }

    //Función que valida los datos ingresados al sistema 
    const FormularioEnvioDatos = (event) => {
        event.preventDefault();
        if(usrtxt===null || usrtxt==='') 
            setErrtxt('ERROR: Introduzca el usuario');
        else if (pwdtxt===null || pwdtxt==='')
            setErrtxt('ERROR: Introduzca la clave');
        else if (usrtxt === 'Admin' && pwdtxt==='123')
            setErrtxt('INFO: Sesión Admin del sistema');
        else if (usrtxt === 'UserInterno' && pwdtxt==='123')
            setErrtxt('INFO: Sesión Usuario Interno del sistema');
        else if (usrtxt === 'UserExterno' && pwdtxt==='123')
            setErrtxt('INFO: Sesión Usuario Externo del sistema');
        else if (usrtxt!=='Admin' || usrtxt!=='UserExterno' || usrtxt!=='UserInterno'|| pwdtxt!=='123' )
            setErrtxt('ERROR: Usuario o contraseña no validos')            
    };

    return (
    <div>
        <section className="login-block">
            <div className="container border border-secondary ">
                <div className="row">
                    <div className="col-md-4 login-sec mt-5">
                        <h2 className="text-center">Inciar Sesión</h2>
                        <form className="login-form" onSubmit= {FormularioEnvioDatos}>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="text-uppercase">Nombre Usuario</label>
                                <input type="text" className="form-control" placeholder="" value={usrtxt} onChange={usrCambio} />

                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className="text-uppercase">Contraseña</label>
                                <input type="password" className="form-control" placeholder=""value={pwdtxt} onChange={pwdCambio} />
                            </div>


                            <div className="form-check">
                            <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" />
                                    <small>Recordar Usuario</small>
                                </label>
                            </div>
                           
                            <div>                                
                                <div className='col-9'>
                                    {Boolean(errtxt) && <p>{errtxt}</p>}
                             </div>
                                <div className='col' align='center'>
                                <input className='btn btn-primary' type='submit' value='Ingresar' align='center'/>
                                </div>
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
    }
export default Ingresar;