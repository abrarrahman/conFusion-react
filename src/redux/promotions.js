import * as actionTypes from './actionTypes'

export const Promotions = (state = {
  isLoading: true,
  errorMessage: null,
  promotions: []
  }, action) => {
  switch (action.type) {
    case actionTypes.ADD_PROMOS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        promotions: action.payload
      }
    case actionTypes.PROMOS_LOADING:
      return {
        ...state,
        isLoading:true,
        errorMessage: null,
        promotions: []
      }
    case actionTypes.PROMOS_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        promotions: []
      }
    default: 
      return state;
  }
}