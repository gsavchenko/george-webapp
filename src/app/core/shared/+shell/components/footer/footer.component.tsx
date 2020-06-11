import React, { Component } from 'react';
import styles from './footer.component.css';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

export class Footer extends Component {
  render() {
    return (
      <div className={cx('footer')}>
        <p>Copyright © 2020 George Savchenko. All Rights Reserved.</p>
      </div>
    );
  }
}

export default Footer;
