import * as actionTypes from './actionTypes';
import { DISHES } from '../shared/dishes';
import {baseUrl} from '../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
  type: actionTypes.ADD_COMMENT,
  payload: {
    dishId, rating, author, comment
  }
})

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));
  fetch(baseUrl+'dishes').then(res=>res.json())
  .then(dishes=>dispatch(addDishes(dishes)));
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
export const fetchComments = () => (dispatch) => {
  fetch(baseUrl+'comments').then(res=>res.json())
  .then(comments=>dispatch(addComments(comments)));
}
const commentsFailed = (errorMessage) => ({
  type: actionTypes.COMMENTS_FAILED,
  payload: errorMessage
})
const addComments = (comments) => ({
  type: actionTypes.ADD_COMMENTS,
  payload: comments
})
export const fetchPromos = () => (dispatch) => {
  fetch(baseUrl+'promotions').then(res=>res.json())
  .then(promos=>dispatch(addPromos(promos)));
}
const promosFailed = (errorMessage) => ({
  type: actionTypes.PROMOS_FAILED,
  payload: errorMessage
})
const addPromos = (promos) => ({
  type: actionTypes.ADD_PROMOS,
  payload: promos
})