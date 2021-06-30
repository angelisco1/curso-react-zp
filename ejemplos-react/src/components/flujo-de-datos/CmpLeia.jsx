const CmpLeia = ({cambiarApellido, nombre, nombreLuke}) => {

  const handleClick = () => {
    cambiarApellido('Leia Skywalker')
  }

  return (
    <div>
      <p>Mi nombre es {nombre}</p>
      <p>Mi hermano se llama {nombreLuke}</p>
      <button type="button" onClick={handleClick}>Actualizar apellido</button>
    </div>
  )
}

export default CmpLeia
