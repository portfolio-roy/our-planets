import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bodiesReducer from './bodies/bodies';
import singleBodyReducer from './single/singlebody';

const store = configureStore(
  {
    reducer: {
      bodies: bodiesReducer,
      singleBody: singleBodyReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;
