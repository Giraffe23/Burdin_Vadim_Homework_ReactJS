import { createAction } from 'redux-actions';

export const loadPokemonsStart = createAction('LOAD_POKEMONS_START');
export const loadPokemonsSuccess = createAction('LOAD_POKEMONS_SUCCESS');
export const loadPokemonsFailure = createAction('LOAD_POKEMONS_FAILURE');

export const loadPokemons = dispatch => {
  dispatch(loadPokemonsStart());
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
    .then(response => response.json())
    .then(response => response.results)
    .then(pokemons => {
      dispatch(loadPokemonsSuccess(pokemons));
    })
    .catch(() => {
      dispatch(loadPokemonsFailure());
    });
};
