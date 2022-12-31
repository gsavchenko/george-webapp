import React from 'react';
import { IconType } from 'react-icons';

export interface IconProps {
  icon: IconType;
  size?: number;
  color?: string;
}

export const Icon = (props: IconProps): JSX.Element => {
  const { icon, size = 36, color = 'white' } = props;

  return React.createElement(icon, {
    size: size,
    color: color,
  });
};
