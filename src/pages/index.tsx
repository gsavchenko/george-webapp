import React, { ReactNode } from 'react';
import { Home } from '../features/home';
import { ShellContainer } from '../features/shell';

const SiteIndex = (): ReactNode => (
  <ShellContainer>
    <Home />
  </ShellContainer>
);

export default SiteIndex;
