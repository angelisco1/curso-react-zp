import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { votarVendehumos } from '../store/vendehumos/actions';

const Vendehumos = ({ id, nombre, tema, numVotos }) => {
  const dispatch = useDispatch()

  return (
    <div className="vendehumos">
      <Link to={'/vendehumos/' + id}><h3>{nombre}</h3></Link>
      <p>{tema}</p>
      <div className="votos">
        <button type="button" onClick={() => dispatch(votarVendehumos(id, numVotos - 1))}>-</button>
        <span>{numVotos}</span>
        <button type="button" onClick={() => dispatch(votarVendehumos(id, numVotos + 1))}>+</button>
      </div>
    </div>
  )
}

export default Vendehumos
