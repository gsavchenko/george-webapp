import { ShellState } from './shell.reducer';

export interface ShellDispatch {
  openMenu?(): void;
  closeMenu?(): void;
}

export interface ShellProps extends ShellState, ShellDispatch {
  children: JSX.Element[] | JSX.Element;
}
