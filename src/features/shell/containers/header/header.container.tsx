import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../../app';
import { Header } from '../../components';
import {
  HeaderState,
  HeaderProps,
  HeaderDispatch
} from '../../store';

import * as Menu from '../../../../common/components/menu/store/menu.actions';

const mapStateToProps = (state: AppState): HeaderState => ({
  menuToggled: state.menu.toggled
});

const mapDispatchToProps = (dispatch: Dispatch<Menu.Actions>): HeaderDispatch => ({
  openMenu: () => dispatch(Menu.open()),
  closeMenu: () => dispatch(Menu.close())
});

const HeaderContainer = (props: HeaderProps) => {
  const {
    openMenu,
    closeMenu,
    menuToggled
  } = props;

  return (
    <Header
      openMenu={openMenu}
      closeMenu={closeMenu}
      menuToggled={menuToggled}
    />
  );
}

export default connect<HeaderState, HeaderProps>(mapStateToProps, mapDispatchToProps)(HeaderContainer);
