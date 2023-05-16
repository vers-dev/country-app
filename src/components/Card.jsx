import { Link } from "react-router-dom"

const Card = ({ card }) => {
 return (
  <Link to={`/countries/${card.name.official.toLowerCase()}`} className="card">
   <img src={card.flags.png} alt={card.flags.alt} className="card-img" title={card.name.common} />
   <div className="card-footer">
    <div className="card-info"><span className="bold-text">Population:</span>{card.population}</div>
    <div className="card-info"><span className="bold-text">Region:</span>{card.region}</div>
    <div className="card-info"><span className="bold-text">Capital:</span>{card.capital}</div>
   </div>
  </Link>
 )
}

export default Card