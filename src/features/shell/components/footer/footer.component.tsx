import React from 'react';
import classnames from 'classnames/bind';
import * as styles from './footer.component.css';

const cx = classnames.bind(styles);

const Footer: React.FC = () => (
  <div className={cx('footer')}>
    <p>Copyright © 2020 George Savchenko. All Rights Reserved.</p>
  </div>
)

export default Footer;
