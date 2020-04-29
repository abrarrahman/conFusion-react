import * as actionTypes from './actionTypes';

export const Comments = (state = {
  errorMessage: null,
  comments: []
}, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT: 
      let comment = action.payload;
      return {
        ...state, 
        comments: state.comments.concat(comment)
      };
    case actionTypes.ADD_COMMENTS:
      return {
        ...state,
        errorMessage: null,
        comments: action.payload
      }
    case actionTypes.COMMENTS_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
        comments: []
      }
    default: 
      return state;
  }
}