import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store';

interface ReduxWrapperProps {
  element: ReactNode
}

const reduxWrapper = ({ element }: ReduxWrapperProps) => (
  <Provider store={createStore(rootReducer)}>
    {element}
  </Provider>
);

export default reduxWrapper;
