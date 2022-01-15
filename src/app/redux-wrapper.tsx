import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store';

const reduxWrapper = ({ element }) => (
  <Provider store={createStore(rootReducer)}>
    {element}
  </Provider>
);

export default reduxWrapper;
