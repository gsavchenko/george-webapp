import { IconLinkProps } from '../../store';
import * as styles from './icon-link.component.css';
import classnames from 'classnames/bind';
import React from 'react';

const cx = classnames.bind(styles);

class IconLink extends React.Component<IconLinkProps, {}> {
  render() {
    const IconProp = this.props.icon;
    return (
      <div className={cx('icon-container')}>
        <a href={this.props.href}>
          <IconProp className={cx('icon')} size={36}></IconProp>
        </a>
      </div>
    );
  }
}

export default IconLink;
