import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Vendehumos 💨</h1>
      <nav>
        <Link to="/vendehumos">Inicio</Link>
        <Link to="/crear-vendehumos">+ Vendehumos</Link>
      </nav>
    </header>
  )
}

export default Header
