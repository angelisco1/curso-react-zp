import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearVendehumos } from '../store/vendehumos/actions';
import Swal from 'sweetalert2'

const Formulario = ({ history }) => {
  const [nombre, setNombre] = useState('')
  const [tema, setTema] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    const nombreTrimmed = nombre.trim()
    if (nombreTrimmed && tema) {
      dispatch(crearVendehumos(nombreTrimmed, tema))
        .then(() => Swal.fire({
            title: 'Vendehumos añadido!',
            text: `Se ha añadido a ${nombreTrimmed} como vendehumos de ${tema}`,
            icon: 'success',
            confirmButtonText: 'Continuar'
        }))
        .then(() => history.push('/vendehumos'))
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Ha ocurrido un error al añadir los datos del vendehumos. Revisa que tanto el nombre como el tema no están vacios.',
        icon: 'error',
        confirmButtonText: 'Continuar'
      })
    }
  }

  return (
    <div>
      <h2>Añade a tu vendehumos favorito</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" value={nombre} onChange={event => setNombre(event.target.value)} />
        </div>
        <div>
          <label htmlFor="tema">Tema</label>
          <select name="tema" id="tema" value={tema} onChange={event => setTema(event.target.value)}>
            <option value=""></option>
            <option value="crypto">Crypto</option>
            <option value="apuestas">Apuestas</option>
            <option value="bolsa">Bolsa</option>
            <option value="dropshipping">Dropshipping</option>
          </select>
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  )
}

export default Formulario
