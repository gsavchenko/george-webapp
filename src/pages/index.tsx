import React from 'react'
import { Home } from '../features/home'
import { Shell } from '../features/shell'

class SiteIndex extends React.Component {
  render() {
    return (
      <Shell>
        <Home />
      </Shell>
    )
  }
}

export default SiteIndex
