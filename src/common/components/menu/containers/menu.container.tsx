import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../../app';
import Menu from '../components/menu.component';
import {
  MenuProps,
  MenuState
} from '../store';

const mapStateToProps = (state: AppState): MenuState => ({
  toggled: state.menu.toggled
});

const MenuContainer:React.FC<MenuProps> = (props) => {
  const { toggled } = props;

  return (
    <Menu toggled={toggled} />
  );
}

export default connect<MenuState>(mapStateToProps)(MenuContainer);
