import * as actionTypes from './actionTypes';
import { DISHES } from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) => ({
  type: actionTypes.ADD_COMMENT,
  payload: {
    dishId, rating, author, comment
  }
})

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));
  setTimeout(()=>{
    dispatch(addDishes(DISHES));
  },2000);
}
const dishesLoading = () => ({
  type: actionTypes.DISHES_LOADING
})
const dishesFailed = (errorMessage) => ({
  type: actionTypes.DISHES_FAILED,
  payload: errorMessage
})
const addDishes = (dishes) => ({
  type: actionTypes.ADD_DISHES,
  payload: dishes
})