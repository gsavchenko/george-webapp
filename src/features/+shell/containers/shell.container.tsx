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

const mapDispatchToProps = (dispatch: Dispatch<Menu.Actions>): ShellDispatch => {
  return {
    openMenu: () => dispatch(Menu.open()),
    closeMenu: () => dispatch(Menu.close())
  };
};

class ShellContainer extends React.Component<ShellProps, ShellState> {
  render() {
    return (
      <Shell
        openMenu={this.props.openMenu}
        closeMenu={this.props.closeMenu}
        menuToggled={this.props.menuToggled}>
        {this.props.children}
      </Shell>
    );
  }
}

export default connect<ShellState, {}>
(mapStateToProps, mapDispatchToProps)(ShellContainer);
