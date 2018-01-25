import {
  FETCH_USERS,
  FETCHING_USERS,
  FETCHING_USERS_FAILURE,
  FETCHING_USERS_SUCCESS
} from './actionTypes';

export const fetchUsers = () => ({
  type: FETCH_USERS
});

export const fetchingUsers = () => ({
  type: FETCHING_USERS
});

export const fetchingUsersFailure = (error) => ({
  type: FETCHING_USERS_FAILURE,
  error: 'Error fetching users.'
});

export const fetchingUsersSuccess = (users) => ({
  type: FETCHING_USERS_SUCCESS,
  users: users
});