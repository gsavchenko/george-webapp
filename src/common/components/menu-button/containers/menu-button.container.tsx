import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../../../app/root.reducer';
import MenuButton from '../components/menu-button';
import * as MenuButtonActions from '../store/menu-button.actions';
import { MenuButtonState } from '../store/menu-button.reducer';
import {
  MenuButtonDispatch,
  MenuButtonProps
} from '../store/menu-button.types';

const mapStateToProps = (state: AppState): MenuButtonState => ({
  toggled: state.menuButton.toggled
});

const mapDispatchToProps = (dispatch: Dispatch<MenuButtonActions.Actions>): MenuButtonDispatch => ({
  turnOn: () => dispatch(MenuButtonActions.turnOn()),
  turnOff: () => dispatch(MenuButtonActions.turnOff())
});

const MenuButtonContainer: React.FC<MenuButtonProps> = (props) => {
  const {
    turnOff,
    turnOn,
    toggled,
    onClick
  } = props;

  return (
    <MenuButton
      turnOn={turnOn}
      turnOff={turnOff}
      toggled={toggled}
      onClick={onClick}
    />
  );
}

export default (connect)<MenuButtonState, MenuButtonDispatch>(mapStateToProps, mapDispatchToProps)(MenuButtonContainer);
