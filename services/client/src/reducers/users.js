import {
  FETCHING_USERS,
  FETCHING_USERS_FAILURE,
  FETCHING_USERS_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  name: 'Jake',
  users: [],
  isFetching: false,
  error: ''
};

function usersReducer(state = initialState, action) {
  switch(action.type) {
    case FETCHING_USERS:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case FETCHING_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.users
      };
    default:
      return state;
  }
}

export default usersReducer;