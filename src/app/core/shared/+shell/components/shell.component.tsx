import { HeaderContainer } from '../containers';
import { ShellProps } from '../store';
import { Footer } from './footer';
import React from 'react';
import classnames from 'classnames/bind';
import styles from './shell.component.css';

const cx = classnames.bind(styles);

class Shell extends React.Component<ShellProps, {}> {
  render() {
    return (
      <div className={cx('container', { 'sidenav-open' : this.props.menuToggled })}>
        <HeaderContainer></HeaderContainer>
        <div className={cx('body', { 'sidenav-open' : this.props.menuToggled })}>
          {this.props.children}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Shell;
