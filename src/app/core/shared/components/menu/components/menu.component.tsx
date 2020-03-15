import classnames from 'classnames/bind';
import React from 'react';
import styles from './menu.css';
import {
  MenuProps,
  MenuState
} from '../store';

const cx = classnames.bind(styles);

class Menu extends React.Component<MenuProps, MenuState> {
  render() {
    return (
      <div className={cx('sidenav', { 'sidenav-open' : this.props.toggled })}>
        <div className={cx('right')}></div>
        <div className={cx('right2')}></div>
          <a href='#'>About</a>
          <a href='#'>Services</a>
          <a href='#'>Clients</a>
          <a href='#'>Contact</a>
      </div>
    );
  }
}

export default Menu;
