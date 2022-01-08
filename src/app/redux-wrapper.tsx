import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store';

interface ProviderProps {
  children: ReactNode
}

// eslint-disable-next-line no-undef
export default (props: ProviderProps): JSX.Element => {
  const { children } = props;

  return (
    <Provider store={createStore(rootReducer)}>
      {children}
    </Provider>
  )
}
