import { useState, useMemo, useEffect } from 'react'
import Color from './Color';
import FormularioConHooks from './FormularioConHooks';

const OtrosHooks = () => {
  const [cuenta, setCuenta] = useState(0)
  const [cuentaAnterior, setCuentaAnterior] = useState(null)
  const [color, setColor] = useState('green')

  useEffect(() => {
    if (cuentaAnterior < 0 && cuenta >= 0) {
      setColor('green')
    } else if (cuentaAnterior >= 0 && cuenta < 0) {
      setColor('red')
    }
  }, [cuenta])

  const ColorMemoized = useMemo(() => {
    console.log('Se calcula otra vez')
    return () => <Color color={color} />
  }, [color])

  const handleChange = (event) => {
    const nuevaCuenta = Number(event.target.value)
    setCuentaAnterior(cuenta)
    setCuenta(nuevaCuenta)
  }

  return (
    <div>
      <h1>Otros hooks</h1>
      <FormularioConHooks />
      <hr />
      <input type="number" value={cuenta} onChange={handleChange} />
      {cuenta !== 0 && <ColorMemoized />}
    </div>
  )
}

export default OtrosHooks
