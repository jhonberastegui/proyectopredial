import { Link } from 'react-router-dom';

const CardConImage = (props) => (

    <div className="card" style={{ width: `18rem` }}>
        <img src={props.image} className="card-img-top" alt={props.title} />
        <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.cardInformation}</p>
            <div className="row">
                <div className="col">
                    <Link to = {`/${props.Link1}`}> { props.nombreLink1 } </Link>
                                   
                    </div>
                <div className="col">
                <Link to= {`/${props.Link2}`}> { props.nombreLink2 } </Link>                
                </div>
            </div>
        </div>
    </div>

)
export default CardConImage;