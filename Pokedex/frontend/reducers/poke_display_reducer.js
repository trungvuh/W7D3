import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const pokemonDisplayReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return action.payload.pokemon.id;

    default:
      return state;
  }
};

export default pokemonDisplayReducer;
