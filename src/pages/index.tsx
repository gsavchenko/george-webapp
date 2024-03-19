import { Home } from '../modules/home';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from '../styles/theme';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export const Head = (): JSX.Element => <title>George Savchenko</title>;

const SiteIndex = (): JSX.Element => (
  <Theme>
    <ThemeProvider theme={theme}>
      {/* Removes a default 8px margin that break 100vh */}
      <Global styles={{ body: { margin: '0px' } }} />
      <Home />
    </ThemeProvider>
  </Theme>
);

export default SiteIndex;
