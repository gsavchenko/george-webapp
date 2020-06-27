import React from 'react';
import { Home } from '../app/+home/components';
import { ShellContainer } from '../app/core/shared/+shell';

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
