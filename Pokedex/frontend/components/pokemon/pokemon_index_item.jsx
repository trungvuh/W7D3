import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {

  render () {
    const { poke } = this.props;
    return (
      <li className="pokemon-index-item">

        <Link to={`/pokemon/${poke.id}`}>
          <span>{poke.id}</span>
          <img src={poke.image_url} alt={poke.name} />
          <span>{poke.name}</span>
        </Link>

      </li>
    );
  }
}

export default PokemonIndexItem;
