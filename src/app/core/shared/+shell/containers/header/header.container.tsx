import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { Header } from '../../components';
import {
  HeaderState,
  HeaderProps,
  HeaderDispatch
} from '../../components/header/store';

import * as Menu from '../../../components/menu/store/menu.actions';

const mapStateToProps = (state: AppState): HeaderState => ({
  menuToggled: state.menu.toggled
});

const mapDispatchToProps = (dispatch: Dispatch<Menu.Actions>): HeaderDispatch => {
  return {
    openMenu: () => dispatch(Menu.open()),
    closeMenu: () => dispatch(Menu.close())
  };
};

class HeaderContainer extends React.Component<HeaderProps, HeaderState> {
  render() {
    return (
      <Header
        openMenu={this.props.openMenu}
        closeMenu={this.props.closeMenu}
        menuToggled={this.props.menuToggled}/>
    );
  }
}

export default connect<HeaderState, HeaderProps>
(mapStateToProps, mapDispatchToProps)(HeaderContainer);
