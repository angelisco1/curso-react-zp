import { CREAR_VENDEHUMOS, INIT_VENDEHUMOS, VOTAR } from './action-types';

const URL = 'https://ejemplos-dc1c1.firebaseio.com/vendehumos/angel'

export const inicializarDatos = () => {
  return dispatch => {
    return fetch(URL + '.json')
      .then(resp => resp.json())
      .then(datos => {
        // console.log(datos)
        // Esto lo hacemos porque Firebase NO devuelve un array de vendehumos sino que devuelve un objeto de objetos (donde la clave es el identificador y el valor de este es el objeto que contiene el nombre, tema y numVotos)
        const vendehumos = []
        for (let id in datos) {
          vendehumos.push({...datos[id], id})
        }
        dispatch(getActionInitVendehumos(vendehumos))
      })
  }
}

const getActionInitVendehumos = (vendehumos) => {
  return {
    type: INIT_VENDEHUMOS,
    payload: vendehumos
  }
}

export const crearVendehumos = (nombre, tema) => {
  let vendehumos = {
    nombre,
    tema,
    numVotos: 0
  }
  return dispatch => {
    return fetch(URL + '.json', {
      method: 'POST',
      body: JSON.stringify(vendehumos)
    })
      .then(resp => resp.json())
      .then(({name}) => {
        vendehumos = {
          ...vendehumos,
          id: name,
        }
        dispatch(getActionCrearVendehumos(vendehumos))
      })
  }
}

const getActionCrearVendehumos = (vendehumos) => {
  return {
    type: CREAR_VENDEHUMOS,
    payload: vendehumos,
  }
}

export const votarVendehumos = (idVendehumos, votos) => {
  return dispatch => {
    // Hacemos una petición PATCH porque con ella modificamos en firebas solo aquellos datos que enviamos. Con el PUT se sobreescribe el objeto guardado con el que estamos enviando.
    return fetch(`${URL}/${idVendehumos}.json`, {
      method: 'PATCH',
      body: JSON.stringify({numVotos: votos})
    })
      .then(resp => resp.json())
      .then(() => {
        dispatch(getActionVotar(idVendehumos, votos))
      })
  }
}

const getActionVotar = (idVendehumos, votos) => {
  return {
    type: VOTAR,
    payload: {
      id: idVendehumos,
      numVotos: votos
    }
  }
}