import { createStore } from 'redux';
import { rootReducer } from './root.reducer';

// preloadedState will be passed to you by the plugin
export default (preloadedState) => {
  return createStore(rootReducer, preloadedState);
};
