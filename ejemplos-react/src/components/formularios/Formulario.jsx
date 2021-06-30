import { useState } from 'react'

const Formulario = () => {
  const [username, setUsername] = useState('charly')
  const [password, setPassword] = useState('')

  const handleChangeUsername = (event) => setUsername(event.target.value)
  const handleSubmit = (event) => {
    event.preventDefault()
    const datosFormulario = {
      username,
      password
    }
    console.log(datosFormulario)
  }

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={username} onChange={handleChangeUsername} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Formulario
