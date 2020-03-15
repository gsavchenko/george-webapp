import React from 'react';
import Logo from '../../../components/logo/components/logo';
import styles from './header.component.css';
import classnames from 'classnames/bind';
import equals from 'ramda/src/equals';
import {
  MenuButtonContainer,
  MenuContainer
} from '../../../../shared/components';
import { HeaderState, HeaderProps } from './store';

const cx = classnames.bind(styles);

class Header extends React.Component <HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);

    this._toggleMenu = this._toggleMenu.bind(this);
  }

  render() {
    return (
      <div className={cx('container', { 'sidenav-open' : this.props.menuToggled })}>
        <div className={cx('button-container')}>
          <MenuButtonContainer onClick={this._toggleMenu} />
        </div>
        <Logo />
        <MenuContainer />
      </div>
    );
  }

  private _toggleMenu(): void {
    equals(this.props.menuToggled, false)
    ? this.props.openMenu()
    : this.props.closeMenu();
  }
}

export default Header;
