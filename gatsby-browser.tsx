import { ThemeProvider, Global } from '@emotion/react';
import { Theme } from '@radix-ui/themes';
import { GatsbyBrowser } from 'gatsby';
import { theme } from './src/styles/theme';

export function onInitialClientRender() {
  require('typeface-merriweather');
  require('typeface-source-sans-pro');
}

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => {
  return (
    <Theme>
      <ThemeProvider theme={theme}>
        {/* Removes a default 8px margin that break 100vh */}
        <Global styles={{ body: { margin: '0px' } }} />
        {element}
      </ThemeProvider>
    </Theme>
  );
};
