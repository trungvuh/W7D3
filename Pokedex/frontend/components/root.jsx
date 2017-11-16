import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import React from 'react';
import PokemonContainer from './pokemon/pokemon_index_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={PokemonContainer} />
    </HashRouter>
  </Provider>
);

export default Root;
