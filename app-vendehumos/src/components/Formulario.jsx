import { useDispatch } from 'react-redux';
import { crearVendehumos } from '../store/vendehumos/actions';

const Formulario = ({ history }) => {

  const dispatch = useDispatch()


  const handleSubmit = (event) => {
    event.preventDefault();
    const nombre = 'Vendehumos ' + Math.random(4)
    const temas = ['Crypto', 'Bolsa', 'Apuestas']
    const pos = Math.floor(Math.random() * temas.length)
    const tema = temas[pos]
    dispatch(crearVendehumos(nombre, tema))
      .then(() => history.push('/vendehumos'))
  }

  return (
    <div>
      <h2>Añade a tu vendehumos favorito</h2>

      <form onSubmit={handleSubmit}>

        <button type="submit">Guardar</button>
      </form>
    </div>
  )
}

export default Formulario
