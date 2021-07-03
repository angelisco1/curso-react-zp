import { CREAR_VENDEHUMOS, INIT_VENDEHUMOS, VOTAR } from './action-types';

const initialState = {
  vendehumos: []
}

const addVendehumos = (state, payload) => {
  const nuevosVendehumos = [...state.vendehumos, payload]
  return {
    ...state,
    vendehumos: nuevosVendehumos
  }
}

const votar = (state, payload) => {
  const vendehumosActualizados = state.vendehumos.map(vh => {
    if (vh.id === payload.id) {
      return {...vh, numVotos: payload.numVotos}
    }
    return vh
  })
  return {
    ...state,
    vendehumos: vendehumosActualizados
  }
}

export default function vendehumos(state = initialState, action) {
  switch(action.type) {
    case INIT_VENDEHUMOS:
      return {...state, vendehumos: action.payload}
    case CREAR_VENDEHUMOS:
      return addVendehumos(state, action.payload)
    case VOTAR:
      return votar(state, action.payload)
    default:
      return state;
  }
}