import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';

import { selectPokeItems } from '../../reducers/selectors';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state) => {
  const pokemon = state.entities.pokemon[state.ui.pokeDisplay];

  return {
    pokemon: pokemon,
    items: selectPokeItems(state, pokemon)
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default (mapStateToProps, mapDispatchToProps)(PokemonDetail);
