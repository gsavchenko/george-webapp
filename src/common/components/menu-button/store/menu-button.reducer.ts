import * as MenuButton from './menu-button.actions';

export interface MenuButtonState {
  toggled?: boolean;
}

const initialState: MenuButtonState = {
  toggled: false
};

export function MenuButtonReducer(
  state = initialState,
  action: MenuButton.Actions
): MenuButtonState {
  switch (action.type) {
    case MenuButton.Types.TURN_ON:
      return {
        toggled: true
      };
    case MenuButton.Types.TURN_OFF:
      return {
        toggled: false
      };
    default:
      return state;
  }
}
