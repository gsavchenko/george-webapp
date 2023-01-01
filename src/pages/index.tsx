import React from 'react';
import { Home } from '../features/home';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from '../styles/theme';

export const Head = (): JSX.Element => <title>George Savchenko</title>;

const SiteIndex = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    {/* Removes a default 8px margin that break 100vh */}
    <Global styles={{ body: { margin: '0px' } }} />
    <Home />
  </ThemeProvider>
);

export default SiteIndex;
