import { useEffect, useState } from 'react'

export const useCampoFormulario = (valorInicial = '', validaciones = []) => {
  const [valor, setValor] = useState(valorInicial)
  const [errores, setErrores] = useState([])

  useEffect(() => {
    const nuevosErrores = validaciones.filter(v => {
      const rexp = new RegExp(v.reg)
      return !rexp.test(valor)
    })
    console.log(nuevosErrores)
    setErrores(nuevosErrores)
  }, [valor])

  const handleChange = (event) => setValor(event.target.value)

  return [
    valor,
    handleChange,
    errores
  ]
}
