import { useState } from 'react'
import { useSelector } from 'react-redux'
import Vendehumos from './Vendehumos';

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
      <div>
        {vendehumos.map(vh => <Vendehumos key={vh.id} {...vh} />)}
      </div>
    </div>
  )
}

export default ListaVendehumos
