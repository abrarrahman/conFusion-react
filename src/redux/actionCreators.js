import * as actionTypes from './actionTypes';
import {baseUrl} from '../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
  type: actionTypes.ADD_COMMENT,
  payload: {
    dishId, rating, author, comment
  }
})

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));
  fetch(baseUrl+'dishes')
  .then(res=>{
    if(res.ok){
      return res;
    }else{
      let error = new Error('Error '+res.status+': '+res.statusText)
      error.response = res;
      throw error;
    }
  },error=>{
    let errmess = new Error(error.message);
    throw errmess;
  }).then(res=>res.json())
  .then(dishes=>dispatch(addDishes(dishes)))
  .catch(error=>dispatch(dishesFailed(error.message)))
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
  fetch(baseUrl+'comments')
  .then(res=>{
    if(res.ok){
      return res;
    }else{
      let error = new Error('Error '+res.status+': '+res.statusText)
      error.response = res;
      throw error;
    }
  },error=>{
    let errmess = new Error(error.message);
    throw errmess;
  }).then(res=>res.json())
  .then(comments=>dispatch(addComments(comments)))
  .catch(error=>dispatch(commentsFailed(error.message)))
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
  fetch(baseUrl+'promotions')
  .then(res=>{
    if(res.ok){
      return res;
    }else{
      let error = new Error('Error '+res.status+': '+res.statusText)
      error.response = res;
      throw error;
    }
  },error=>{
    let errmess = new Error(error.message);
    throw errmess;
  }).then(res=>res.json())
  .then(promos=>dispatch(addPromos(promos)))
  .catch(error=>dispatch(promosFailed(error.message)))
}
const promosFailed = (errorMessage) => ({
  type: actionTypes.PROMOS_FAILED,
  payload: errorMessage
})
const addPromos = (promos) => ({
  type: actionTypes.ADD_PROMOS,
  payload: promos
})