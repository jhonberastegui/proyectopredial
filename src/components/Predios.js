
import React from "react";




const Predios = (props) => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                    <div className="well well-sm">
                        <form className="form-horizontal card p-5" method="post">
                            <fieldset className="center">
                                <legend className="text-center header"><h2>{props.title}</h2></legend>

                                <div className="form-group" >
                                    <div className="col-md-12" >
                                        <label for="codigopredio" className="control-label">Codigo Predio: </label>
                                        <input id="codigopredio" name="cod_predio" type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label for="nombrepropietario" className="control-label">Nombre del Propietario: </label>
                                        <input id="nombrepropietario" name="nombre" type="text" className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label for="cedulapropietario" className="control-label">Cedula Propietario: </label>
                                        <input id="cedulapropietario" name="cedula" type="number" className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label for="area" className="control-label">Area total del predio: </label>
                                        <input id="area" name="area" type="text" className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label for="areaconst" className="control-label">Area construida del predio: </label>
                                        <input id="areaconst" name="area_construida" type="text" className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label for="direccion" className="control-label">direccion: </label>
                                        <input id="direccion" name="direccion" type="text" className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12">
                                        <label for="barrio" className="control-label">Barrio: </label>
                                        <input id="barrio" name="barrio" type="text" className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group mt-4">
                                    <div className="col-md-12 text-center">
                                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div className="col-md-3">
                </div>
            </div>
        </div>

    </div>


)

export default Predios;