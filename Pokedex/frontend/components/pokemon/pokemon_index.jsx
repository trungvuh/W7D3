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
          pokemon.map( poke =>
            <li>poke.name</li>
          )
        }
      </ul>
    );
  }
}

export default PokemonIndex;
