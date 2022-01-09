import { MdClose, MdMenu } from 'react-icons/md';
import { MenuButtonProps } from '../store/menu-button.types';
import { IconButton } from '../../../../features/icon';
import React from 'react';

const MenuButton: React.FC<MenuButtonProps> = (props) => {
  const { toggled, onClick, turnOff, turnOn } = props;

  const icon = {
    open: MdMenu,
    closed: MdClose
  };

  const toggle = () => {
    (!toggled)
      ? turnOn()
      : turnOff();

    onClick();
  }

  return (
    <IconButton
      icon={toggled ? icon.closed : icon.open}
      onClick={toggle}>
    </IconButton>
  );
}

export default MenuButton;
