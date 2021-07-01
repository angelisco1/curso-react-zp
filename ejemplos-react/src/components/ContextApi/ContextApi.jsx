import { useState, createContext } from 'react';
import DatosUsuario from './DatosUsuario';

export const DarkModeContext = createContext(true)

const ContextApi = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => setDarkMode(!darkMode)

  return (
    <div>
      <h1>Context API (Dark Mode)</h1>
      <button type="button" onClick={handleClick}>Alternar modo oscuro</button>

      <DarkModeContext.Provider value={darkMode}>
        <DatosUsuario />
      </DarkModeContext.Provider>
    </div>
  )
}

export default ContextApi
