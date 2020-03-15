import React from 'react';
import { Home } from '../app/+home/components';
import { Shell } from '../app/core/shared/+shell';

class SiteIndex extends React.Component {
  render() {
    return (
      <Shell>
        <Home />
      </Shell>
    );
  }
}

export default SiteIndex;
