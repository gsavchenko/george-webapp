import {
  createStore,
  DeepPartial,
  StateFromReducersMapObject,
  Store
} from 'redux'
import { rootReducer } from './root.reducer'

export type RootState = StateFromReducersMapObject<typeof rootReducer>

// preloadedState will be passed to you by the plugin
export default (preloadedState: DeepPartial<RootState>): Store => createStore(rootReducer, preloadedState)
