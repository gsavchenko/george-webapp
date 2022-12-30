import React from 'react';
import { Home } from '../features/home';
import { Shell } from '../features/shell';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../styles/theme';

const SiteIndex = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

export default SiteIndex;
