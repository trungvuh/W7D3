import values from 'lodash/values';

const selectAllPokemon = (state) => {
  return values(state.pokemon); //pay attention
};

export default selectAllPokemon;
