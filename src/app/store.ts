import { DeepPartial } from 'redux'
import { rootReducer } from './root-reducer'
import { configureStore } from '@reduxjs/toolkit'

// The Gatsby plugin passed in preloaded state with a fn
// so I need so set this seperately to type AppDispatch
// const configure = configureStore({ reducer: rootReducer })

// preloadedState will be passed to you by the plugin
const store = (preloadedState: DeepPartial<RootState>) =>
  configureStore({ reducer: rootReducer, preloadedState })

export type RootState = ReturnType<typeof rootReducer>
// export type AppDispatch = typeof configure.dispatch

export default store
