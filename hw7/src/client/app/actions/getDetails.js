import { createAction } from 'redux-actions';

export const getDetailsStart = createAction('GET_DETAILS_START');
export const getDetailsSuccess = createAction('GET_DETAILS_SUCCESS');
export const getDetailsFailure = createAction('GET_DETAILS_FAILURE');

export const getDetails = dispatch => {
  dispatch(getDetailsStart());
  fetch(`https://pokeapi.co/api/v2/pokemon/7/`)
    .then(response => response.json())
    .then(response => response)
    .then(pokemon => {
      dispatch(getDetailsSuccess(pokemon));
    })
    .catch(() => {
      dispatch(getDetailsFailure());
    });
};
