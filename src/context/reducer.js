import * as actionTypes from './types';

export const initialState = {
  basket: [],
  user: null
}

export const getBasketTotal = basket => {
  return basket?.reduce((acc, item) => acc + item.price, 0);
}

const reducer = (state = initialState, action) => {
  switch (action.type)
  {
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload]
      };
    case actionTypes.REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: state.basket.filter(item => item.id !== action.payload)
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null
      }
    default: return state;
  }
}
export default reducer;