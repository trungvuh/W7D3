import React from 'react';
import { Route } from 'react-router-dom';

class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(nextProps) {
   if (this.props.match.params.pokemonId !== nextProps.match.params.pokemonId) {
     this.props.requestSinglePokemon(nextProps.match.params.pokemonId);
   }
  }

  render () {
    const { pokemon, items } = this.props;
    return (
      <section>
        <figure>
          <img src={pokemon.image_url} />
        </figure>

        <ul>
          <li><h1>{pokemon.name}</h1></li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Type: {pokemon.poke_type}</li>
          <li>Moves: {pokemon.moves.join(', ')}</li>
        </ul>

        <section>
          <h3> Items </h3>
          <ul>
            {
              items.map( item => <li key={item.name}>{item.name}</li>)
            }
          </ul>
        </section>
      </section>
    );
  }
}

export default PokemonDetail;
