import { handleActions } from 'redux-actions';

import { getDetailsStart, getDetailsSuccess, getDetailsFailure } from '../actions/getDetails';

const initialState = {
  loading: false,
  pokemon: [],
  error: false
};

export const getDetailsReducer = handleActions(
  {
    [getDetailsStart]: state => {
      return {
        ...state,
        loading: true
      };
    },
    [getDetailsSuccess]: (state, action) => {
      return {
        ...state,
        pokemon: action.payload,
        loading: false
      };
    },
    [getDetailsFailure]: state => {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
  },
  initialState
);
