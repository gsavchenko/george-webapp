import React, { ReactNode } from 'react';
import Home from '../features/home/home.component';
import ShellContainer from '../features/shell/containers/shell.container';

const SiteIndex = (): ReactNode => (
  <ShellContainer>
    <Home />
  </ShellContainer>
);

export default SiteIndex;
