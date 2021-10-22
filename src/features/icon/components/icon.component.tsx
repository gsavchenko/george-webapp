import classnames from 'classnames/bind';
import React from 'react';
import { IconType } from 'react-icons';
import * as styles from './icon.component.css';

interface IconProps {
  icon: IconType;
}

const cx = classnames.bind(styles);

const Icon: React.FC<IconProps> = (props) => {
  const { icon } = props
  const IconComponent = icon

  return <IconComponent className={cx('icon')} size={36} />;
}

export default Icon;
