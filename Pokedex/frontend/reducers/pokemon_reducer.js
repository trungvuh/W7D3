import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon);

    case RECEIVE_SINGLE_POKEMON:
      const poke = action.payload.pokemon;
      poke.items_id = action.payload.items.map(item => item.id);

      return merge({}, state, { [poke.id]: poke });

    default:
      return state;
  }
};

export default pokemonReducer;
