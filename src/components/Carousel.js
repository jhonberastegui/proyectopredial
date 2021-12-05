const Carousel = ()=>(
<section id="hero">
<div className="hero-container">
  <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

    <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

    <div className="carousel-inner" role="listbox">

      {/* <!--Slide 1 --> */}
      <div className="carousel-item active" style={{ background: `url(img/slide/slide-1.jpg)` }}>
        <div className="carousel-container">
          <div className="carousel-content">
            <h2 className="animate__animated animate__fadeInDown">Gestion Catastral <span> Huila</span></h2>
            <p className="animate__animated animate__fadeInUp">Aqui en tu portal catastral podrás realizar todos los procesos que necesitas para mantener tu predio al día con los impuestos</p>
            <a href="none" className="btn-get-started animate__animated animate__fadeInUp">Más Información</a>
          </div>
        </div>
      </div>

      {/* <!--Slide 2 --> */}
      <div className="carousel-item" style={{ background: `url(/img/slide/slide-2.jpg)` }}>
        <div className="carousel-container">
          <div className="carousel-content">
            <h2 className="animate__animated fanimate__adeInDown"> Aprovecha <br/><span>Descuentos</span></h2>
            <p className="animate__animated animate__fadeInUp">La Gobernación del Huila te invita a cancelar antes del 31 de diciembre de 2021 y obtén un descuento del 15% sobre el pago de tu impuesto. ¡No esperes más!.</p>
            <a href="none" className="btn-get-started animate__animated animate__fadeInUp">Más información</a>
          </div>
        </div>
      </div>

      {/* <!--Slide 3 --> */}
      <div className="carousel-item" style={{ background: `url(/img/slide/slide-3.jpg)` }}>
        <div className="carousel-container">
          <div className="carousel-content">
            <h2 className="animate__animated animate__fadeInDown">Cancela <span> sin salir de casa!</span></h2>
            <p className="animate__animated animate__fadeInUp">Gestiona toda tu información predial sin salir de casa, solo aqui por nuestro portal catastral. Registrate o inicia sesión</p>
            <a href="none" className="btn-get-started animate__animated animate__fadeInUp">Ingresa</a>
          </div>
        </div>
      </div>

    </div>

    <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
      <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
    </a>

    <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
      <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
    </a>

  </div>
</div>
</section >    
)
export default Carousel;