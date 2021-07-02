const DetalleVendehumos = ({ match }) => {

  return (
    <div>
      <h2>Nombre Apellidos (ID: {match.params.id})</h2>
      <p>Descripción</p>
      <p>Tema: Apuestas y Cryptos</p>
    </div>
  )
}

export default DetalleVendehumos
