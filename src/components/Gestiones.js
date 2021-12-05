
import React from 'react';
import CardConImage from './CardConImage';

const Gestiones = (props) => (

    <div className="container">
        <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-6 card p-5">
                <div className="well well-sm">
                    <legend className="text-center header"><h3>{props.title}</h3></legend>
                    <div className="row col-auto">

                        <CardConImage image={props.imagen1}
                            clase="btn btn-warning"
                            title="Gestion cobros"
                            cardTitle="GENERAR COBROS ANUALES"
                            cardInformation="Genera los cobros de los predios anualmente"
                        />

                        <CardConImage image={props.imagen2}
                            clase="btn btn-danger"
                            title="Gestion sanciones"
                            cardTitle="GENERAR MULTAS O SANCIONES"
                            cardInformation="Genera multas o sanciones sobre los predios con pagos en mora"
                        />
                    </div>
                </div>


            </div>
            <div className="col-md-3"></div>

            <div className="col-md-3"></div>
            <div className="col-md-6 card p-5 ">
                <CardConImage image={props.imagen3}
                    clase="btn btn-danger"
                    title="Gestion sanciones"
                    cardTitle="GENERAR MULTAS O SANCIONES"
                    cardInformation="Genera multas o sanciones sobre los predios con pagos en mora"
                />

            </div>
            <div className="col-md-3"></div>
        </div >
    </div >

)

export default Gestiones;