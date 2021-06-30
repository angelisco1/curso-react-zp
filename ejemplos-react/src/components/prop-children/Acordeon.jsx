import { useState } from "react"
import './Acordeon.css'

const Acordeon = ({ titulo, children }) => {
  const [desplegado, setDesplegado] = useState(false)

  const acordeonContentClass = 'acordeon-content ' + (desplegado ? 'abierto' : 'cerrado')

  return (
    <div className="acordeon">
      <div className="acordeon-heading" onClick={() => setDesplegado(!desplegado)}>
        <h2>{titulo}</h2>
      </div>
      <div className={acordeonContentClass}>
        {children}
      </div>
    </div>
  )
}

export default Acordeon
