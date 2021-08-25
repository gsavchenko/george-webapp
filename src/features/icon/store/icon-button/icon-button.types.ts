import { IconProps } from '../icon.types';

export interface IconButtonProps extends IconProps {
  onClick?: () => void;
}
