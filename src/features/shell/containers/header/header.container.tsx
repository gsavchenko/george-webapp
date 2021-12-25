import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../../app';
import Header, { HeaderProps } from '../../components/header/header.component';

export interface HeaderDispatch {
  openMenu?(): void;
  closeMenu?(): void;
}

interface HeaderState {
  menuToggled?: boolean;
}

const mapStateToProps = (state: AppState): HeaderState => ({
  menuToggled: state.menu.toggled
})

const HeaderContainer = (props: HeaderProps) => {
  const { openMenu, closeMenu, menuToggled } = props

  return (
    <Header
      openMenu={openMenu}
      closeMenu={closeMenu}
      menuToggled={menuToggled}
    />
  )
}

export default connect<HeaderState, HeaderProps>(mapStateToProps)(HeaderContainer)
