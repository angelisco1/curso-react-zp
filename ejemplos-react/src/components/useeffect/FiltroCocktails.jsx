import { useState, useEffect } from 'react'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const FiltroCocktails = () => {
  const [filtro, setFiltro] = useState('')
  const [listaCocktails, setListaCocktails] = useState([])
  const [cocktailSeleccionado, setCocktailSeleccionado] = useState(null)

  useEffect(() => {
    if (filtro.length > 3) {
      fetch(URL + filtro)
        .then(resp => resp.json())
        .then(datos => {
          console.log(datos)
          setListaCocktails(datos.drinks || [])
        })
    }
  }, [filtro])

  return (
    <div>
      <input type="text" value={filtro} onChange={(event) => setFiltro(event.target.value)} />
      <hr />
      <ul>
        {
          listaCocktails.map(cocktail => {
            return (
              <li onClick={() => setCocktailSeleccionado(cocktail)} key={cocktail.idDrink}>{cocktail.strDrink}</li>
            )
          })
        }
      </ul>
      <hr />
      {
        cocktailSeleccionado
        ?
        (
          <div>
            <h3>{cocktailSeleccionado.strDrink}</h3>
            <p>{cocktailSeleccionado.strInstructions}</p>
          </div>
        )
        :
        <p>Selecciona un cocktail para ver la información.</p>
      }
    </div>
  )
}

export default FiltroCocktails
