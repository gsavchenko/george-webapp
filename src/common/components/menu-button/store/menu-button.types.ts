import { MenuButtonState } from './menu-button.reducer';

export interface MenuButtonDispatch {
  turnOn?(): void;
  turnOff?(): void;
}

export interface MenuButtonProps extends MenuButtonDispatch, MenuButtonState {
  onClick?: () => void;
}
