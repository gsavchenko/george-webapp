import { IconProps } from '../store';
import classnames from 'classnames/bind';
import React from 'react';

import * as styles from './icon.component.css';

const cx = classnames.bind(styles);

class Icon extends React.Component<IconProps, {}> {
  constructor(props: IconProps) {
    super(props);
  }

  render() {
    const IconProp = this.props.icon;
    return <IconProp className={cx('icon')} size={36}></IconProp>;
  }
}

export default Icon;
