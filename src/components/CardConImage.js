import { Link } from 'react-router-dom';

const CardConImage = (props) => (
    <div className="row" align="center">
    <div className="card-columns " style={{ width: `17rem` }}>
        <div className="card border-secondary h-100">
            <img src={props.image} className="card-img-top" alt={props.title} />

            <div className="card-body">
                <h5 className={props.clase}>{props.cardTitle}</h5>
                <p className="card-text">{props.cardInformation}</p>
                <div className="row">
                    <div className="col">
                        <Link to={`/${props.link1}`} > {props.nombreLink1} </Link>
                    </div>
                    <div className="col">
                        <Link to={`/${props.link2}`}> {props.nombreLink2} </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

)
export default CardConImage;