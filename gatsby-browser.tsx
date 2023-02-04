import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from './src/styles/theme';

export const onInitialClientRender: GatsbyBrowser['onInitialClientRender'] =
  () => {
    require('typeface-merriweather');
    require('typeface-source-sans-pro');
  };

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => (
  <>
    {/* Removes a default 8px margin that break 100vh */}
    <Global styles={{ body: { margin: '0px' } }} />
    <ThemeProvider theme={theme}>{element}</ThemeProvider>;
  </>
);
