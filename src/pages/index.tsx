import React from 'react';
import { Home } from './home';
import { ShellContainer } from '../features/+shell';

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
