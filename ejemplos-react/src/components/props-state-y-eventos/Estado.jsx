import React from 'react'
import { useState } from 'react'

const Estado = () => {
  const [cuenta, setCuenta] = useState(0)
  // const [username, setUsername] = useState('')
  // const [pass, setPass] = useState('')

  // const [estado, setEstado] = useState({
  //   cuenta: 0,
  //   username: '',
  //   pass: ''
  // })

  // setEstado({
  //   cuenta: estado.cuenta+1,
  //   username: estado.username,
  //   pass: estado.pass,
  // })

  const incrementar = () => {
    setCuenta(cuenta + 1)
  }

  const mostrarHref = (event) => {
    event.preventDefault()
    alert('Vas a ir a la página: ' + event.target.href)
  }

  const handleClick = () => {
    const textoIntro = new Array(16).join(1-'wat') + ' Batman!';
    const configSpeech = new SpeechSynthesisUtterance(textoIntro);
    configSpeech.rate = 0.8;
    window.speechSynthesis.speak(configSpeech);
  }

  return (
    <React.Fragment>
      <button type="button" onClick={(event) => setCuenta(cuenta - 1)}>-</button>
      Cuenta: {cuenta}
      <button type="button" onClick={incrementar}>+</button>
      <a href="http://www.google.es" onClick={mostrarHref}>Ir a Google</a>
      <button type="button" onClick={handleClick}>Que suene la intro de Batman!</button>
    </React.Fragment>
  )
}

export default Estado
