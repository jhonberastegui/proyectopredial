import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ExampleModal from './ExampleModal'
import Boton from "./Boton";


class Formulario extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nombre: "", 
            apellido: "",
            tipoId: "",
            numerId: "",
            email: "",
            celular: "",
            nombreUser: "",
            password: ""
        }
        this.cambiarNombre =this.cambiarNombre.bind(this)
        this.cambiarApellido = this.cambiarApellido.bind(this)
        this.cambiarTipoId = this.cambiarTipoId.bind(this)
        this.cambiarNumeroId = this.cambiarNumeroId.bind(this)
        this.cambiarEmail = this.cambiarEmail.bind(this)
        this.cambiarCelular = this.cambiarCelular.bind(this)
        this.cambiarNombreUser = this.cambiarNombreUser.bind(this)
        this.cambiarPassword = this.cambiarPassword.bind(this)



    }
    //this.setState({}) recibe un objeto que se va a actualizar al nuevo estado
    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }

    cambiarApellido(e){
        this.setState({
            apellido: e.target.value
        })
    }

    cambiarTipoId(e){
        this.setState({
            tipoId: e.target.value
        })
    }

    cambiarNumeroId(e){
        this.setState({
            numeroId: e.target.value
        })
    }


    cambiarEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    cambiarCelular(e){
        this.setState({
            celular: e.target.value
        })
    }

    cambiarNombreUser(e){
        this.setState({
            nombreUser: e.target.value
        })
    }

    cambiarPassword(e){
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <div className="container col-xs-12 col-sm-1 col-md-6 col-md-offset-1 border border-secondary mt-4 mb-4 p-5">

                <div className="" align="center" >
                    <h2>{this.props.nameForm}</h2><br />
                </div>
                <div className="row h-100 justify-content-center align-items-center" align="center">
                  <h5>Información Básica</h5>
                </div>
                <form>
                    <div className="mb-3">
                        
                        <label for="nombre" className="form-label">Nombre</label>
                        <input 
                        type="text"                        
                        className="form-control" 
                        id="nombre" 
                        aria-describedby="nombre"
                        onChange={ this.cambiarNombre } 
                        />

                        <label for="apellidos" className="form-label">Apellidos</label>
                        <input type="text" 
                        className="form-control" 
                        id="apellidos" 
                        aria-describedby="apellido"
                        onChange={ this.cambiarApellido }
                        />
                        
                        <label for="tipoId" className="form-group">Tipo Id:</label>
                        <select className="form-control" id="tipoId"
                        onChange= { this.cambiarTipoId }>
                            <option>Cedula de Ciudadanía</option>
                            <option>Cedula de Extranjería</option>                            
                        </select>

                        <label for="numeroId" className="form-label">Numero Id:</label>
                        <input type="text" className="form-control" 
                        id="numeroId" 
                        aria-describedby="numeroId"
                        onChange={ this.cambiarNumeroId }
                        />

                        <label for="exampleInputEmail1" className="form-label">Email:</label>
                        <input type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        onChange={ this.cambiarEmail }
                        />

                        <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                        
                        <label for="celular" className="form-label">Celular:</label>
                        <input type="text" 
                        className="form-control" 
                        id="celular" 
                        aria-describedby="celular" 
                        onChange={ this.cambiarCelular }
                        />
                    </div>
          
                    <h5 align="center" >Información para acceso a la plataforma</h5>
                    <div className="row">
                        <div className="col">

                            <label for="nombreUser" className="form-label">Nombre Usuario</label>
                            <input type="text" 
                            className="form-control" 
                            id="nombreUser" 
                            aria-describedby="nombreUser"
                            onChange={ this.cambiarNombreUser }
                            />

                        </div>

                        <div className="col mb-3">                            
                            <label for="password" className="form-label">Contraseña</label>
                            <input type="password" 
                            className="form-control" 
                            id="password" 
                            onChange={ this.cambiarPassword }
                            />

                        </div>
                    </div>
                    <div id="emailHelp" className="form-text">Sus datos serán tratados de acuerdo a la política de protección de datos personales de la Gobernación de Huila en cumplimiento a lo dispuesto en la Ley 1581 de 2012 y Decreto reglamentario 1377 de 2013*</div>
                    <div id="emailHelp" className="form-text">He leído y acepto la Política de Privacidad de la Gobernación de Huila</div><br/>
                    <div className="mb-3 form-check">
                        
                        <div className="row">
                        <div className="col">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Acepto</label>
                        </div>
                        <div className="col">
                        <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                        <label className="form-check-label" for="exampleCheck1">No Acepto</label>
                        
                        </div>
                    </div>
                    </div>
                    <div className="row" align="center">
                    <div className="col">
                    <Link to="/">< Boton title="Cancelar" clase= "btn btn-danger m-2" /></Link>
                    </div>
                    <div className="col">
                    <ExampleModal title = "Registrarse"/>
                    {/* < Boton title="Registrarse" clase="btn btn-primary m-2" /> */}
                    </div>
                    </div>
                </form>
              {/*   <div>
                    <h5>`Tu Nombre es: {this.state.nombre}`</h5>
                    <h5>`Tu Apellido es: {this.state.apellido}`</h5>
                </div> */}


            </div>

        )
    }
}

export default Formulario;