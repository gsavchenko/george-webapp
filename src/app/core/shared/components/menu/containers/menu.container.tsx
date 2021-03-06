import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { Menu } from '../components';
import {
  MenuProps,
  MenuState
} from '../store';

const mapStateToProps = (state: AppState): MenuState => ({
  toggled: state.menu.toggled
});

class MenuContainer extends React.Component<MenuProps, MenuState> {
  render() {
    return (
      <Menu toggled={this.props.toggled}/>
    );
  }
}

export default connect<MenuState>
(mapStateToProps)(MenuContainer);
