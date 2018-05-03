import { handleActions } from 'redux-actions';

import { loadPokemonsStart, loadPokemonsSuccess, loadPokemonsFailure } from '../actions/pokemons';

const initialState = {
  loading: false,
  pokemons: [],
  error: false
};

export const pokemonsReducer = handleActions(
  {
    [loadPokemonsStart]: state => {
      return {
        ...state,
        loading: true
      };
    },
    [loadPokemonsSuccess]: (state, action) => {
      return {
        ...state,
        pokemons: action.payload,
        loading: false
      };
    },
    [loadPokemonsFailure]: state => {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
  },
  initialState
);
