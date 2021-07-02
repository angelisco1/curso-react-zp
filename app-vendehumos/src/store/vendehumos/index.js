import { CREAR_VENDEHUMOS, INIT_VENDEHUMOS } from './action-types';

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

export default function vendehumos(state = initialState, action) {
  switch(action.type) {
    case INIT_VENDEHUMOS:
      return {...state, vendehumos: action.payload}
    case CREAR_VENDEHUMOS:
      return addVendehumos(state, action.payload)
    default:
      return state;
  }
}