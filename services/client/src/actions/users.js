import {
  FETCHING_USERS,
  FETCHING_USERS_FAILURE,
  FETCHING_USERS_SUCCESS
} from './actionTypes';

export const fetchingUsers = () => ({
  type: FETCHING_USERS
});

export const fetchingUsersFailure = () => ({
  type: FETCHING_USERS_FAILURE,
  error: 'Error fetching users.'
});

export const fetchingUsersSuccess = (users) => ({
  type: FETCHING_USERS_SUCCESS,
  users: users
});