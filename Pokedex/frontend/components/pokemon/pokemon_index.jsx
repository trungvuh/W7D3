import React from 'react';
import { Route } from 'react-router-dom';

import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {

  componentWillMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    const pokemonIndexItems = pokemon.map( (poke) =>
      <PokemonIndexItem key={poke.id} poke={poke} />);

    return(
      <div>
        <ul>
          {pokemonIndexItems}
        </ul>

        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
      </div>
    );
  }
}

export default PokemonIndex;
