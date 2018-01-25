import {
  FETCH_USERS,
  FETCHING_USERS
} from '../actions/actionTypes';

const initialState = {
  name: 'Jake',
  users: [],
  isFetching: false,
  error: ''
};

function usersReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERS:
      return {
        ...state,
      };
    case FETCHING_USERS:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
}

export default usersReducer;