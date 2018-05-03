import { combineReducers } from 'redux';

import { pokemonsReducer } from './pokemons';
import { getDetailsReducer } from './getDetails';

export default combineReducers({
  pokemons: pokemonsReducer,
  pokemon: getDetailsReducer
});
