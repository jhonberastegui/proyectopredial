import './App.css';
import './bootstrap.css'

function App() {
  return (
    <div>
      {/* <!--======= Top Bar ======= --> */}
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact @example.com</a></i>
            <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="none" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="none" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="none" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="none" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </section >

      {/* <!--======= Header ======= --> */}
      < header id="header" className="d-flex align-items-center" >
        <div className="container d-flex justify-content-between align-items-center">

          <div className="logo">
            <h1><a href="index.html">Huila</a></h1>
            {/* <!--Uncomment below if you prefer to use an image logo --> */}
            {/* <!--<a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="active" href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="team.html">Team</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li className="dropdown"><a href="none"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="none">Drop Down 1</a></li>
                  <li className="dropdown"><a href="none"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="none">Deep Drop Down 1</a></li>
                      <li><a href="none">Deep Drop Down 2</a></li>
                      <li><a href="none">Deep Drop Down 3</a></li>
                      <li><a href="none">Deep Drop Down 4</a></li>
                      <li><a href="none">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="none">Drop Down 2</a></li>
                  <li><a href="none">Drop Down 3</a></li>
                  <li><a href="none">Drop Down 4</a></li>
                </ul>
              </li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>{/* <!--.navbar --> */}

        </div>
      </header > {/* <!--End Header --> */}

      {/* <!--======= Hero Section ======= --> */}
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
                    <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid.Sequi ea ut et est quaerat sequi nihil ut aliquam.Occaecati alias dolorem mollitia ut.Similique ea voluptatem.Esse doloremque accusamus repellendus deleniti vel.Minus et tempore modi architecto.</p>
                    <a href="" className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
                  </div>
                </div>
              </div>

              {/* <!--Slide 2 --> */}
              <div className="carousel-item" style={{ background: `url(/img/slide/slide-2.jpg)` }}>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animate__animated fanimate__adeInDown">Lorem <span>Ipsum Dolor</span></h2>
                    <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid.Sequi ea ut et est quaerat sequi nihil ut aliquam.Occaecati alias dolorem mollitia ut.Similique ea voluptatem.Esse doloremque accusamus repellendus deleniti vel.Minus et tempore modi architecto.</p>
                    <a href="" className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
                  </div>
                </div>
              </div>

              {/* <!--Slide 3 --> */}
              <div className="carousel-item" style={{ background: `url(/img/slide/slide-3.jpg)` }}>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animate__animated animate__fadeInDown">Sequi ea <span>Dime Lara</span></h2>
                    <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid.Sequi ea ut et est quaerat sequi nihil ut aliquam.Occaecati alias dolorem mollitia ut.Similique ea voluptatem.Esse doloremque accusamus repellendus deleniti vel.Minus et tempore modi architecto.</p>
                    <a href="" className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
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
      </section > {/* <!--End Hero --> */}

      < main id="main" >

        {/* <!--======= Featured Section ======= --> */}
        < section id="featured" className="featured" >
          <div className="container">

            <div className="row">
              <div className="col-lg-4">
                <div className="icon-box">
                  <i className="bi bi-card-checklist"></i>
                  <h3><a href="">Lorem Ipsum</a></h3>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="icon-box">
                  <i className="bi bi-bar-chart"></i>
                  <h3><a href="">Dolor Sitema</a></h3>
                  <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="icon-box">
                  <i className="bi bi-binoculars"></i>
                  <h3><a href="">Sed ut perspiciatis</a></h3>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
              </div>
            </div>

          </div>
        </section > {/* <!--End Featured Section --> */}

        {/* <!--======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container">

            <div className="row">
              <div className="col-lg-6">
                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content">
                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>

          </div>
        </section>{/* <!--End About Section --> */}

        {/* <!--======= Services Section ======= --> */}
        <section id="services" className="services">
          <div className="container">

            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon"><i className="bx bxl-dribbble"></i></div>
                  <h4><a href="">Lorem Ipsum</a></h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-file"></i></div>
                  <h4><a href="">Sed ut perspiciatis</a></h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-tachometer"></i></div>
                  <h4><a href="">Magni Dolores</a></h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-world"></i></div>
                  <h4><a href="">Nemo Enim</a></h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-slideshow"></i></div>
                  <h4><a href="">Dele cardo</a></h4>
                  <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-arch"></i></div>
                  <h4><a href="">Divera don</a></h4>
                  <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                </div>
              </div>

            </div>

          </div>
        </section>{/* <!--End Services Section --> */}

        {/* <!--======= Clients Section ======= --> */}
        <section id="clients" className="clients">
          <div className="container">

            <div className="section-title">
              <h2>Clients</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="clients-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
              </div>
              <div className="swiper-pagination"></div>
            </div>

          </div>
        </section>{/* <!--End Clients Section --> */}

      </main > {/* <!--End #main --> */}

      {/* <!--======= Footer ======= --> */}
      <footer id="footer">

        <div className="footer-newsletter">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h4>Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              </div>
              <div className="col-lg-6">
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">About us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Services</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Terms of service</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Privacy policy</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Web Design</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Web Development</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Product Management</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Marketing</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="none">Graphic Design</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022<br />
                  United States <br /><br />
                  <strong>Phone: </strong> +1 5589 55488 55 <br />
                  <strong>Email: </strong> info @example.com <br />
                </p>

              </div>

              <div className="col-lg-3 col-md-6 footer-info">
                <h3>About Eterna</h3>
                <p>Cras fermentum odio eu feugiat lide par naso tierra.Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
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
            &copy; Copyright <strong><span>Eterna</span></strong>.All Rights Reserved
          </div>
          <div className="credits">
            {/* <!--All the links in the footer should remain intact. --> */}
            {/* <!--You can delete the links only if you purchased the pro version. --> */}
            {/* <!--Licensing information: https://bootstrapmade.com/license/ --> */}
            {/* <!--Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/eterna-free-multipurpose-bootstrap-template/ --> */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>{/* <!--End Footer --> */}

      <a href="none" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

      {/* <!--Vendor JS Files --> */}
      <script src="assets/vendor/purecounter/purecounter.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>

      {/* <!--Template Main JS File --> */}
      <script src="assets/js/main.js"></script>
    </div >

  );
}

export default App;