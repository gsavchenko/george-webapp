import classnames from 'classnames/bind';
import React from 'react';
import styles from './animated-background.component.css';

const cx = classnames.bind(styles);

class AnimatedBackground extends React.Component {
  render() {
    return (<div id='animate-area'></div>);
  }
}

export default AnimatedBackground;
