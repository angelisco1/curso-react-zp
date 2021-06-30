import { useState } from 'react'
import CmpLeia from './CmpLeia'
import CmpLuke from './CmpLuke'

const FlujoDeDatos = () => {
  const [nombreLeia, setNombreLeia] = useState('Leia Organa')
  const [nombreLuke, setNombreLuke] = useState('Luke Skywalker')

  return (
    <div>
      <h1>Flujo de datos</h1>
      <CmpLeia nombre={nombreLeia} nombreLuke={nombreLuke} cambiarApellido={setNombreLeia} />
      <CmpLuke nombre={nombreLuke} nombreLeia={nombreLeia} />
    </div>
  )
}

export default FlujoDeDatos
