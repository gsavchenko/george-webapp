import React from 'react';
import classnames from 'classnames/bind';

import HeaderContainer from '../containers/header/header.container';
import { ShellProps } from '../store';
import Footer from './footer/footer.component';

import * as styles from './shell.component.css';

const cx = classnames.bind(styles);

const Shell: React.FC<ShellProps> = (props) => {
  const { children } = props;

  // TODO: fix side menu open
  return (
    // <div className={cx('container', { 'sidenav-open': menuToggled })}>
    <div className={cx('container')}>
      <HeaderContainer />
      {/* <div className={cx('body', { 'sidenav-open': menuToggled })}> */}
      <div className={cx('body')}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Shell;
