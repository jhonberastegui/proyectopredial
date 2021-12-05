const Contactenos = () => (
    <div>
        <section className="ftco-section contact-section ftco-degree-bg container col-xs-12 col-sm-1 col-md-6 col-md-offset-1 border border-secondary mt-4 mb-4 p-3">
            <div className="container">
                <div className="row d-flex mb-5 contact-info">
                    <div className="col-md-12 mt-3">
                        <h2 className="h4" align="center">INFORMACIÓN DE CONTACTO</h2>
                    </div>
                       
                </div>
                <div className="row block-9">
                    <div className="col-md-11 pr-md-5" align="center">
                        <h5 className="mb-4">Déjanos tus comentarios o sugerencias</h5>
                        <form action="#">
                            <div className="form-group">
                                <input type="text" className="form-control m-3" placeholder="Tu Nombre" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control m-3" placeholder="Tu correo" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control m-3" placeholder="Asunto" />
                            </div>
                            <div className="form-group">
                                <textarea name="" id="" cols="30" rows="7" className="form-control m-3" placeholder="Mensaje"></textarea>
                            </div>
                            <div className="form-group mt-4" align="center">
                                <input type="submit" value="Enviar Mensaje" className="btn btn-primary py-3 px-5" />
                            </div>
                        </form>

                    </div>

                    <div className="col-md-6" id="map"></div>
                </div>
            </div>
        </section>
        </div>
)
   
export default Contactenos;