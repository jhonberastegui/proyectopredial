import { Link } from 'react-router-dom';

const CardPrueba = ({lista, ...rest}) => (  
    <div className="container row mt-3" align="center">
    {lista.map(ele=> <div className="col">
      <div className="col" align="center">         
            <div className="card border-secondary h-100">
                <div className="card-columns " style={{ width: `17rem` }}>
                    <img src={ele.image} className="card-img-top" alt={ele.title} />        
                    <div className="card-body">
                        <h5 className={ele.clase}>{ele.cardTitle}</h5>
                        <p className="card-text">{ele.cardInformation}</p>
                        <div className="row">
                            <div className="col">
                                <Link to={`/${ele.link1}`} > {ele.nombreLink1} </Link>
                            </div>
                        <div className="col">
                            <Link to={`/${ele.link2}`}> {ele.nombreLink2} </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
        </div>
         )}
        </div>
        


       
    
)
export default CardPrueba;
