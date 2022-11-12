import React from 'react'
import { Home } from '../features/home'
import { Shell } from '../features/shell'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../styles/theme'

class SiteIndex extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Shell>
          <Home />
        </Shell>
      </ThemeProvider>
    )
  }
}

export default SiteIndex
