import React from 'react';
import VerticalLayoutProps from './vertical-layout.interface';
import * as styles from './vertical-layout.css';
import classnames from 'classnames';

const cx = classnames.bind(styles);

class VerticalLayout extends React.Component<VerticalLayoutProps, {}> {
  render() {
    return (
      <div className={cx('stacklayout-container')}>
        <div className={cx('top')}>{this.props.top}</div>
        <div>{this.props.bottom}</div>
      </div>
    );
  }
}

export default VerticalLayout;
