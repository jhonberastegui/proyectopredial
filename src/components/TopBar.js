const TopBar = ()=>(
    <section id="topbar" className="d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">gestionpredial@huila.gov.co</a></i>
        <i className="bi bi-phone d-flex align-items-center ms-4"><span>01 8000 968 716</span></i>
      </div>
      <div className="social-links d-none d-md-flex align-items-center">
        <a href="none" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="none" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="none" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="none" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>
  </section >
)
export default TopBar;