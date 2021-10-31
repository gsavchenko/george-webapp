import * as Menu from './menu.actions';

export interface MenuState {
  toggled?: boolean;
}

const initialState: MenuState = {
  toggled: false
};

export function MenuReducer(
  state = initialState,
  action: Menu.Actions
): MenuState {
  switch (action.type) {
    case Menu.Types.OPEN:
      return {
        toggled: true
      };
    case Menu.Types.CLOSE:
      return {
        toggled: false
      };
    default:
      return state;
  }
}
