import usersReducer from './users';
import * as actionTypes from '../actions/actionTypes';

describe('users reducer', () => {
  it('should return the initial state', () => {
    expect(usersReducer(undefined, {})).toEqual({
      name: 'Jake',
      users: [],
      isFetching: false,
      error: ''
    });
  });

  it('should handle FETCHING_USERS_SUCCESS', () => {
    const users = ['userOne', 'userTwo'];
    expect(usersReducer({}, {
      type: actionTypes.FETCHING_USERS_SUCCESS,
      users: users
    })).toEqual({
      isFetching: false,
      users: users
    });
  });

  it('should handle FETCHING_USERS', () => {
    expect(usersReducer({}, {
      type: actionTypes.FETCHING_USERS
    })).toEqual({
      isFetching: true
    });
  });

  it('should handle FETCHING_USERS_FAILURE', () => {
    const errorMsg = 'Error fetching users.';
    expect(usersReducer({}, {
      type: actionTypes.FETCHING_USERS_FAILURE,
      error: errorMsg
    })).toEqual({
      isFetching: false,
      error: errorMsg
    });
  });
});