import React from 'react';
import classnames from 'classnames/bind';
import HeaderContainer from '../containers/header/header.container';
import { ShellProps } from '../store';
import { Footer } from './footer';
import * as styles from './shell.component.css';

const cx = classnames.bind(styles);

const Shell: React.FC<ShellProps> = (props) => {
  const { menuToggled, menuToggled, children } = props;

  return (
    <div className={cx('container', { 'sidenav-open': menuToggled })}>
      <HeaderContainer />
      <div className={cx('body', { 'sidenav-open': menuToggled })}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Shell;
