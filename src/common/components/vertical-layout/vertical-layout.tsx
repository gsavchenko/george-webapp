import React, { ReactNode } from 'react';
import classnames from 'classnames';

import * as styles from './vertical-layout.css';

interface VerticalLayoutProps {
  top: ReactNode;
  bottom: ReactNode;
}

const cx = classnames.bind(styles);

const VerticalLayout: React.FC<VerticalLayoutProps> = (props) => {
  const { top, bottom } = props;

  return (
    <div className={cx('stacklayout-container')}>
      <div className={cx('top')}>{top}</div>
      <div>{bottom}</div>
    </div>
  );
}

export default VerticalLayout;
