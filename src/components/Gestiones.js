import React from 'react';
import CardConImage from './CardConImage';

const Gestiones = (props) => (
    <div>
        < main id="main" >
            <h3 className="mt-5" align="center">GESTIONAR COBROS, MULTAS O SANCIONES</h3>
            <div className="ftco-section contact-section ftco-degree-bg container col-xs-12 col-sm-1 col-md-6 col-md-offset-1 mt-4 mb-4 p-3">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col" align="center">
                        <CardConImage
                            image="https://circulante.com/wp-content/uploads/2017/03/pagos-y-cobros-de-facturas.jpg"
                            clase="btn btn-warning"
                            title="Gestion cobros"
                            cardTitle="GENERAR COBROS ANUALES"
                            cardInformation="Genera los cobros de los predios anualmente"
                        />
                    </div>
                    <div className="col" align="center">
                        <CardConImage
                            image="https://directivosygerentes.es/wp-content/uploads/2018/07/cobros-pymes-datisa-681x454.jpg"
                            clase="btn btn-danger"
                            title="Gestion sanciones"
                            cardTitle="GENERAR MULTAS O SANCIONES"
                            cardInformation="Genera multas o sanciones sobre los predios con pagos en mora"
                        />
                    </div>
                </div>
            </div>
        </main >
    </div >
)
export default Gestiones;