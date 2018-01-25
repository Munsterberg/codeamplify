import {
  FETCH_USERS,
  FETCHING_USERS
} from './actionTypes';

export const fetchUsers = () => ({
  type: FETCH_USERS
});

export const fetchingUsers = () => ({
  type: FETCHING_USERS
});