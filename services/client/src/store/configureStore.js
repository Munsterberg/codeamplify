import { createStore, combineReducers } from 'redux';

import usersReducer from '../reducers/users';

export default () => {
  const store = createStore(
    combineReducers({
      users: usersReducer
    }),
    // Redux DevTools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};