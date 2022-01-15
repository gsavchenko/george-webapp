import { createStore } from 'redux';
import { rootReducer } from './root.reducer';

// preloadedState will be passed to you by the plugin
const store = (preloadedState) => {
  return createStore(rootReducer, preloadedState);
};

export default store;
