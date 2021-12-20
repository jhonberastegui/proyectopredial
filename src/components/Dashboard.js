
import CardConImage from './CardConImage';
/* import MenuLateralDash from './MenuLateralDash'; */

function Dashboard() {
  return (

    <div>
{/*     <MenuLateralDash/> */}
      <h1 align="center">DASHBOARD</h1> <br />
      
      <div class="container col-11">
        <h4 align="center">Gestionar Predios</h4>
        <div class="row m-4">
          <div class="col" align="center">
          <CardConImage
              image="https://cloudfront-us-east-1.images.arcpublishing.com/semana/BAMKVWYU2BEPVBS343OKGZBC3Y.jpg"
              title="imagen crear predio"
              cardTitle="Crear Predio"           
              />
          </div>
          <div class="col" align="center">
          <CardConImage
              image="https://www.uniminutoradio.com.co/wp-content/uploads/2021/06/identificador_impuesto_predial-829x550-1.jpg"
              title="imagen asociar predio"
              cardTitle="Asociar Predio"
            />
          </div>
          <div class="col" align="center">
          <CardConImage
              image="http://www.mantyobras.com/blog/wp-content/uploads/2017/10/copropiedad.jpg"
              title="imagen gestionar"
              cardTitle="Gestionar Predios"
            />
          </div>
        </div>
      </div>

      <div class="container col-11" >
        <h4 align="center">Gestionar Usuarios</h4>
        <div class="row m-4">
          <div class="col" align="center">
            <CardConImage
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSul1Wdon1dlJwPWmqWq3SxlROPrvmsrUd-ig&usqp=CAU"
              title="imagen crear usuario"
              cardTitle="Crear Usuario"

            />

          </div>
          <div class="col" align="center">
            <CardConImage
              image="https://www.osi.es/sites/default/files/images/imagen-decorativa-infografia-cuentas-usuario.png"
              title="imagen editar usuario"
              cardTitle="Editar Usuario"
            />

          </div>
          <div class="col" align="center">
            <CardConImage
              image="https://www.solvetic.com/uploads/tutorials/monthly_07_2019/65d5e778b5f4de4391b64a10fcc0ee79.png"
              title="imagen eliminar usuario"
              cardTitle="Eliminar Usuario"
            />
          </div>
        </div>
      </div>

      <div class="container col-11">
        <h4 align="center">Cobros y fechas de pago</h4>
        <div class="row m-4">
          <div class="col" align="center">
            <CardConImage
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIgFVrZcGaRUAc8cQjUSVfFrWEV_wc9igTVQ&usqp=CAU"
              title="imagen cobros anuales"
              cardTitle="Generar Cobros Anuales"
            />

          </div>
          <div class="col" align="center">
            <CardConImage
              image="https://www.hostgator.mx/blog/wp-content/uploads/2018/12/calendario-fechas-comerciales-hostgator.png"
              title="imagen fechas maximas"
              cardTitle="Fechas maximas de pago"
            />

          </div>
          <div class="col" align="center">
            <CardConImage
              image="https://www.tooltyp.com/wp-content/uploads/2019/01/1900x920-como-y-por-que-hacer-descuentos-en-tu-ecommerce.jpg"
              title="imagen fechas descuento"
              cardTitle="Fechas de descuento"
            />

          </div>
        </div>
      </div>

      <div class="container col-11">
        <div class="row m-4">
          <div class="col" align="center">
            <CardConImage
              image="https://assets-global.website-files.com/5f4f67c5950db17954dd4f52/5fd22e81b2a5d92bf8471ba7_descuento-hiperb%C3%B3lico-1024x683.jpg"
              title="imagen definir descuento"
              cardTitle="Definir descuento"
            />

          </div>
          <div class="col" align="center">
            <CardConImage
              image="https://es.gigroup.com/wp-content/uploads/sites/3/2018/06/convenio_colectivo-940x584.jpg"
              title="imagen fechas maximas"
              cardTitle="Aprobar/desaprobar convenios"
            />

          </div>
          <div class="col" align="center">
            <CardConImage
              image="https://elceo.com/wp-content/uploads/2021/06/multaa.jpg"
              title="imagen multas/sanciones"
              cardTitle="Multas/Sanciones"
            />

          </div>
        </div>
      </div>

    </div >
  );
}
export default Dashboard;