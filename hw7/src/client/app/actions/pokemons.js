import { createActions } from 'redux-actions';

export const loadPokemonsStart = createActions(LOAD_POKEMONS);
export const loadPokemonsSuccess = createActions(LOAD_POKEMONS_SUCCESS);
export const loadPokemonsFailure = createActions(LOAD_POKEMONS_FAILURE);

export const loadPokemons = dispatch => () => {
  dispatch(loadPokemonsStart());
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
    .then(response => response.json())
    .then(response => response.results)
    .then(pokemons => {
        dispatch(loadPokemonsSuccess(pokemons));
     
     
/*
        this.setState({
        pokemons: pokemons.map(pokemon => ({
          id: pokemon.url.split(/\D+/)[2],
          ...pokemon
        }))
      });
    });
*/

};
