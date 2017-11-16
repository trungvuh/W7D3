import values from 'lodash/values';

export const selectAllPokemon = (pokemon) => {
  return values(pokemon); //pay attention
};

export const selectPokeItems = (state, pokemon) => {
  return pokemon ? pokemon.item_ids.map(id => state.entities.items[id]) : [];
};
