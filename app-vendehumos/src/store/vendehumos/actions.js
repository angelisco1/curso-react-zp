import { CREAR_VENDEHUMOS, INIT_VENDEHUMOS, VOTAR } from './action-types';

export const inicializarDatos = () => {
  return {
    type: INIT_VENDEHUMOS,
    payload: [
      { id: 106, nombre: 'Vendehumos 1', tema: 'Crypto' },
      { id: 724, nombre: 'Vendehumos 2', tema: 'Apuestas' },
      { id: 6, nombre: 'Vendehumos 3', tema: 'Bolsa' },
    ]
  }
}

export const votar = (idVendehumos) => {
  return {
    type: VOTAR,
    payload: idVendehumos
  }
}


// export const crearVendehumos = (nombre, tema) => {
//   return {
//     type: CREAR_VENDEHUMOS,
//     payload: {
      // nombre,
      // tema,
      // numVotos: 0
//     }
//   }
// }
export const crearVendehumos = (nombre, tema) => {
  const vendehumos = {
    nombre,
    tema,
    numVotos: 0
  }
  return (dispatch) => {
    return fetch('https://ejemplos-dc1c1.firebaseio.com/vendehumos/angel.json', {
      method: 'POST',
      body: JSON.stringify(vendehumos)
    })
      .then(resp => resp.json())
      .then(({name}) => {
        dispatch({
          type: CREAR_VENDEHUMOS,
          payload: {
            ...vendehumos,
            id: name,
          }
        })
      })
  }
}