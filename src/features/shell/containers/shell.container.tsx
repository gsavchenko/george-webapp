import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../app';
import { Shell } from '../components';
import {
  ShellProps,
  ShellDispatch,
  ShellState
} from '../store';

import * as Menu from '../../../common/components/menu/store/menu.actions';

const mapStateToProps = (state: AppState): ShellState => ({
  menuToggled: state.menu.toggled
});

const mapDispatchToProps = (dispatch: Dispatch<Menu.Actions>): ShellDispatch => ({
  openMenu: () => dispatch(Menu.open()),
  closeMenu: () => dispatch(Menu.close())
});

const ShellContainer = (props: ShellProps) => {
  const {
    openMenu,
    closeMenu,
    menuToggled,
    children
  } = props;

  return (
    <Shell
      openMenu={openMenu}
      closeMenu={closeMenu}
      menuToggled={menuToggled}
    >
      {children}
    </Shell>
  );
}

export default connect<ShellState>(mapStateToProps, mapDispatchToProps)(ShellContainer);
