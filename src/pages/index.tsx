import React from 'react';
import { Home } from '../features/home';
import { ShellContainer } from '../features/shell';

class SiteIndex extends React.Component {
  render() {
    return (
      <ShellContainer>
        <Home />
      </ShellContainer>
    );
  }
}

export default SiteIndex;
