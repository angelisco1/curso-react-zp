import { useEffect, useState } from 'react'

export const useCampoFormulario = (valorInicial = '') => {
  const [valor, setValor] = useState(valorInicial)
  const [errores, setErrores] = useState([])

  // TODO: mejorar con array de regexps
  useEffect(() => {
    const error = 'Tiene que tener más de 2 letras'
    if (valor.length < 3) {
      if (!errores.includes(error)) {
        const nuevosErrores = [...errores, error]
        setErrores(nuevosErrores)
      }
    } else {
      const nuevosErrores = errores.filter(e => e !== error)
      setErrores(nuevosErrores)
    }
  }, [valor])

  const handleChange = (event) => setValor(event.target.value)

  return [
    valor,
    handleChange,
    errores
  ]
}