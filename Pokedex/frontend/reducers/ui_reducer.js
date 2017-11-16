import merge from 'lodash/merge';
import { combineReducers } from 'redux';

import pokemonDisplayReducer from './poke_display_reducer';

export default combineReducers({
  pokeDisplay: pokemonDisplayReducer
});
