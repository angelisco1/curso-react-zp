import Acordeon from "./Acordeon"

const PropChildren = () => {
  return (
    <div>
      <h1>Prop children</h1>
      <Acordeon titulo="¿Qué es React?">
        <p>Es una librería de JS...</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="Logo de React" />
      </Acordeon>

      <Acordeon titulo="Ingredientes de Margarita">
        <ul>
          <li>Tequila</li>
          <li>Triple sec</li>
          <li>Lime juice</li>
          <li>Salt</li>
        </ul>
      </Acordeon>
    </div>
  )
}

export default PropChildren
