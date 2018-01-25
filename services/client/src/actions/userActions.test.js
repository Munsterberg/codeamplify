import * as actionTypes from './actionTypes';
import * as userActions from './users';

describe('action types', () => {
  it('should create an action to fetch users', () => {
    const expectedAction = {
      type: actionTypes.FETCH_USERS
    };
    expect(userActions.fetchUsers()).toEqual(expectedAction);
  });

  it('should create an action to change isFetching to true', () => {
    const expectedAction = {
      type: actionTypes.FETCHING_USERS
    };
    expect(userActions.fetchingUsers()).toEqual(expectedAction);
  });

  it('should create an action for fetching users failure', () => {
    const expectedAction = {
      type: actionTypes.FETCHING_USERS_FAILURE,
      error: 'Error fetching users.'
    };
    expect(userActions.fetchingUsersFailure()).toEqual(expectedAction);
  });

  it('should create an action for fetching users success', () => {
    const users = ['userOne', 'userTwo'];
    const expectedAction = {
      type: actionTypes.FETCHING_USERS_SUCCESS,
      users: users
    };
    expect(userActions.fetchingUsersSuccess(users)).toEqual(expectedAction);
  });
});