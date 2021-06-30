import { useEffect } from 'react'
import FiltroCocktails from './FiltroCocktails'

const UseEffect = () => {
  //estado -> cuenta

  // useEffect(() => {
  //   return () => {
  //     clearInterval(id)
  //   }
  // }, [cuenta])

  return (
    <div>
      <h1>useEffect</h1>
      <FiltroCocktails />
    </div>
  )
}

export default UseEffect
