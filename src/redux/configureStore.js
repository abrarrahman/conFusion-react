import {createStore, combineReducers} from 'redux';
import {Comments} from './comments';
import {Leaders} from './leaders';
import {Promotions} from './promotions';
import {Dishes} from './dishes';

export const ConfigureStore = () => {
  const reducers = combineReducers({
    dishes: Dishes,
    comments: Comments,
    promotions: Promotions,
    leaders: Leaders
  })
  const store = createStore(reducers)
  return store;
}