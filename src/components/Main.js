import MainCardsItem from "./MainCardsItem";

const Main = () => (
  < section id="featured" className="featured" >
    <div className="container">
      <div className="row">
          <MainCardsItem className="bi bi-box-arrow-right" title="Ingresa al portal catastral" content="Consulte toda la información de su predio"/>
          <MainCardsItem className="bi bi-list-check" title="Tramites Catastrales" content="Consulte y cancele multas, Sanciones de sus predios asociados" />
          <MainCardsItem className="bi bi-binoculars" title="Consultar el estado de su convenio" content = "Revise el estado de su convenio registrado" />
      </div>
    </div>
  </section >

)
export default Main;