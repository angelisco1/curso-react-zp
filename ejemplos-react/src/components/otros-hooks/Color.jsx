import { useReducer, useEffect } from 'react'

const styles = {
  width: '100px',
  height: '100px',
  border: '1px solid black',
  position: 'relative',
}

const initialState = {
  top: 0,
  left: 0,
}

// action = {
//   type: 'INCREMENT',
//   payload: 2
// }

function reducer(state, action) {
  switch(action.type) {
    case 'ArrowLeft':
      return {...state, left: state.left - 5}
    case 'ArrowRight':
      return {...state, left: state.left + 5}
    case 'ArrowUp':
      return {...state, top: state.top - 5}
    case 'ArrowDown':
      return {...state, top: state.top + 5}
    default:
      return state;
  }
}

const Color = ({color}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const moverCuadrado = (event) => {
    console.log('Se ha pulsado la tecla:', event.key)
    dispatch({ type: event.key })
  }

  useEffect(() => {
    window.addEventListener('keydown', moverCuadrado)
    return () => {
      window.removeEventListener('keydown', moverCuadrado)
    }
  }, [])

  return (
    <div style={{
      ...styles,
      backgroundColor: color,
      top: state.top+'px',
      left: state.left+'px',
    }}>

    </div>
  )
}

export default Color
