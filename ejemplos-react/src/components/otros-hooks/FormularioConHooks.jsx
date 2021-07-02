import { useState } from 'react'
import { useCampoFormulario } from './useCampoFormulario';

const Formulario = () => {

  const [username, handleChangeUsername, erroresUsername] = useCampoFormulario('Charly', [
    { reg: /\w{3,}/, msg: 'Tiene que tener más de 2 letras', key: 'min-length' },
    // { reg: /\w{3,}@\w?\.\w{2,3}/, msg: 'No es un email válido', key: 'email' },
  ])
  const [password, handleChangePassword, erroresPassword] = useCampoFormulario('', [
    { reg: /[A-Z]+/, msg: 'Tiene que tener al menos una letra mayúscula', key: 'mayuscula' },
    { reg: /[a-z]+/, msg: 'Tiene que tener al menos una letra minúscula', key: 'minuscula' },
    { reg: /[0-9]+/, msg: 'Tiene que tener al menos un número', key: 'numero' },
    { reg: /.{5,}/, msg: 'Tiene que tener como mínimo 5 carácteres', key: 'min-length' },
  ])


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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={username} onChange={handleChangeUsername} />
          <ul>
            {erroresUsername.length > 0 && erroresUsername.map(err => <li key={err.key}>{err.msg}</li>)}
          </ul>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={handleChangePassword} />
          <ul>
            {erroresPassword.length > 0 && erroresPassword.map(err => <li key={err.key}>{err.msg}</li>)}
          </ul>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Formulario
// import { useState } from 'react'
// import { useCampoFormulario } from './useCampoFormulario';

// const Formulario = () => {

//   const [username, handleChangeUsername, erroresUsername] = useCampoFormulario('Charly', [
//     { reg: /\w{3,}/, msg: 'Tiene que tener más de 2 letras' },
//     { reg: /\w{3,}@\w?\.\w{2,3}/, msg: 'No es un email válido' },
//   ])
//   const [password, handleChangePassword] = useCampoFormulario('')


//   const handleSubmit = (event) => {
//     event.preventDefault()
//     const datosFormulario = {
//       username,
//       password
//     }
//     console.log(datosFormulario)
//   }

//   // TODO: utilizar clave del error como key
//   const erroresUsername1 = erroresUsername.length > 0 ? erroresUsername.map((e, i) => <p>{e}</p>) : []

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" name="username" value={username} onChange={handleChangeUsername} />
//           {erroresUsername1}
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" name="password" value={password} onChange={handleChangePassword} />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   )
// }

// export default Formulario
