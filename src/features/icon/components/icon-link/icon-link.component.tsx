import classnames from 'classnames/bind';
import React from 'react';
import { IconProps } from '../icon.component';
import * as styles from './icon-link.component.css';

interface IconLinkProps extends IconProps {
  href: string;
}

const cx = classnames.bind(styles);

const IconLink:React.FC<IconLinkProps> = (props) => {
  const { icon, href } = props;
  const IconComponent = icon;

  return (
    <div className={cx('icon-container')}>
      <a href={href}>
        <IconComponent className={cx('icon')} size={36} />
      </a>
    </div>
  );
}

export default IconLink;
