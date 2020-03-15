import React from 'react';
import LogoImage from '../../../../../../assets/george-logo.png';
import VerticalLayout from '../../vertical-layout/vertical-layout';
import styles from './logo.css';
import classnames from 'classnames';

const cx = classnames.bind(styles);

class Logo extends React.Component {
  render() {
    return (
      <VerticalLayout
        top={<img src={LogoImage} className={cx('logo-container')}/>}
        bottom={<label>by George Savchenko</label>}>
      </VerticalLayout>
    );
  }
}

export default Logo;
