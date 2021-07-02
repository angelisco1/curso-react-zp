const Formulario = ({ history }) => {


  const handleSubmit = (event) => {
    event.preventDefault();

    history.push('/vendehumos')
  }

  return (
    <div>
      <h2>Añade a tu vendehumos favorito</h2>

      <form onSubmit={handleSubmit}>

        <button type="submit">Guardar</button>
      </form>
    </div>
  )
}

export default Formulario
