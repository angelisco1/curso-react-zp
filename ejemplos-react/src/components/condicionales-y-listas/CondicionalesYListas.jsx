import { useState } from 'react'
import Sugus from '../props-state-y-eventos/Sugus';

const infoSugus = [
  { id: 2102, color: 'yellow', sabor: 'limón' },
  { id: 2331, color: 'orange', sabor: 'naranja' },
  { id: 22342, color: 'red', sabor: 'fresa' },
  { id: 33243, color: 'blue', sabor: 'piña' },
]

const CondicionalesYListas = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState(false)

  const listaSugus = infoSugus.map((sugus) => {
    return <Sugus key={sugus.id} color={sugus.color} sabor={sugus.sabor} />
  })

  console.log(listaSugus)

  return (
    <div>
      <h1>Condicionales</h1>
      {mostrarMensaje ? <p>El canario está en la jaula...</p> : <p>No puedes ver el mensaje</p>}
      {mostrarMensaje && <p>El canario está en la jaula...</p>}

      <button type="button" onClick={() => setMostrarMensaje(!mostrarMensaje)}>{mostrarMensaje ? 'Ocultar' : 'Mostrar'} mensaje</button>

      <h1>Listas</h1>
      {listaSugus}
    </div>
  )
}

export default CondicionalesYListas
