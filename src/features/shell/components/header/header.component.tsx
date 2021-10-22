import React from 'react';
import classnames from 'classnames/bind';
import equals from 'ramda/src/equals';
import { MenuButtonContainer, MenuContainer } from '../../../../common/components';
import { Logo } from '../../../../common/components/logo';
import * as styles from './header.component.css';

const cx = classnames.bind(styles);
interface HeaderProps {
  menuToggled: boolean
  openMenu: () => void
  closeMenu: () => void
}

const Header:React.FC<HeaderProps> = (props) => {
  const { menuToggled, openMenu, closeMenu } = props;

  const toggleMenu = () => {
    if (equals(menuToggled, false)) openMenu()
    else closeMenu();
  }

  return (
    <div className={cx('header', { 'sidenav-open': menuToggled })}>
      <div className={cx('button-container')}>
        <MenuButtonContainer onClick={toggleMenu} />
      </div>
      <Logo />
      <MenuContainer />
    </div>
  )
}

export default Header;
