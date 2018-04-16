import { handleActions } from 'redux-actions';

import { loadPokemons } from '../actions/pokemons';

const initiasState = {
  pokepons: []
};

const reducer = handleActions(
  {
    [loadPokemons]: (state, action) => {
      return;
    }
  },
  initialState
);
