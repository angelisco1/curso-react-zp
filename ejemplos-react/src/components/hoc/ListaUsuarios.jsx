const ListaUsuarios = ({datos}) => {
  const listaUsuarios = datos.map(u => <li key={u.id}>{u.name}</li>)

  return (
    <ul>
      {listaUsuarios}
    </ul>
  )
}

export default ListaUsuarios
