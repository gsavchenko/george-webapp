import { MdClose, MdMenu } from 'react-icons/md';
import equals from 'ramda/src/equals';
import React from 'react';
import { isNil } from 'ramda';

import { MenuButtonProps } from '../store/menu-button.types';
import { IconButton } from '../../../../features/icon/components/icon-button';

const MenuButton: React.FC<MenuButtonProps> = (props) => {
  const {
    toggled,
    onClick,
    turnOn,
    turnOff
  } = props;

  const icon = {
    open: MdMenu,
    closed: MdClose
  };

  const toggle = (): void => {
    if (equals(toggled, false)) turnOn()
    else turnOff();

    if (!isNil(onClick)) onClick();
  }

  return (
    <IconButton
      icon={equals(toggled, true) ? icon.closed : icon.open}
      onClick={toggle}
    />
  );
}

export default MenuButton;
