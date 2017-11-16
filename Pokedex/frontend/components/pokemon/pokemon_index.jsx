import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    console.log(this.props);
    return(
      <ul>
        {
          pokemon.map( (poke) =>
            <li key={poke.id}>{poke.name} <img src={poke.image_url} /></li>
          )
        }
      </ul>
    );
  }
}

export default PokemonIndex;
