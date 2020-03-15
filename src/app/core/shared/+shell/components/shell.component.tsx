import React from 'react';
import { HeaderContainer } from '../containers';
import { ShellProps } from '../store';
import classnames from 'classnames/bind';
import styles from './shell.component.css';

const cx = classnames.bind(styles);

class Shell extends React.Component<ShellProps, {}> {

  render() {
    return (
      <div>
        <HeaderContainer></HeaderContainer>
        <div className={cx('body')}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Shell;
