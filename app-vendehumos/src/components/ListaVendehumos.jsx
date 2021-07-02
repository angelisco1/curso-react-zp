import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ListaVendehumos = () => {
  // const [vendehumos, setVendehumos] = useState([
  //   { id: 106, nombre: 'Vendehumos 1', tema: 'Crypto' }
  // ])
  const vendehumos = useSelector(state => {
    // console.log(state)
    return state.vendehumos.vendehumos
  })

  return (
    <div>
      <h2>Vota a los vendehumos</h2>
      <ul>
        {vendehumos.map(vh => <Link key={vh.id} to={'/vendehumos/' + vh.id}>{vh.nombre}</Link>)}
      </ul>
    </div>
  )
}

export default ListaVendehumos
