import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './root-reducer'

const reduxWrapper = ({ element }) => (
  <Provider store={createStore(rootReducer)}>{element}</Provider>
)

export default reduxWrapper
