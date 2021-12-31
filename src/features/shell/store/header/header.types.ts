import { HeaderState } from './header.reducer';

export interface HeaderProps extends HeaderState, HeaderDispatch {}

export interface HeaderDispatch {
  openMenu?(): void;
  closeMenu?(): void;
}
