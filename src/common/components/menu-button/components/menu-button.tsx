import { MdClose, MdMenu } from 'react-icons/md';
import { MenuButtonState } from '../store/menu-button.reducer';
import { MenuButtonProps } from '../store/menu-button.types';
import { IconButton } from '../../../../features/icon';
import equals from 'ramda/src/equals';
import React from 'react';
import { isNil } from 'ramda';

class MenuButton extends React.Component<MenuButtonProps, MenuButtonState> {
  private _icon = {
    open: MdMenu,
    closed: MdClose
  };

  constructor(props: MenuButtonProps) {
    super(props);

    this._toggle = this._toggle.bind(this);
  }

  render() {
    return (
      <IconButton
        icon={equals(this.props.toggled, true) ? this._icon.closed : this._icon.open}
        onClick={this._toggle}>
      </IconButton>
    );
  }

  private _toggle(): void {
    const emptyCallback = () => {};
    const callback = !isNil(this.props.onClick) ? this.props.onClick : emptyCallback;

    equals(this.props.toggled, false)
    ? this.props.turnOn()
    : this.props.turnOff();

    callback();
  }
}

export default MenuButton;
