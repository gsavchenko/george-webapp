import React from 'react';
import { Home } from '../app/+home/components';
import { ShellContainer } from '../app/core/shared/+shell';

class SiteIndex extends React.Component {
  constructor(props: {}) {
    super(props);

    this.setAppHeight = this.setAppHeight.bind(this);
  }

  render() {
    return (
      <ShellContainer>
        <Home />
      </ShellContainer>
    );
  }

  componentDidMount() {
    window.addEventListener('resize', this.setAppHeight);
    this.setAppHeight();
  }

  private setAppHeight(): void {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  }
}

export default SiteIndex;
