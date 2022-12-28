import classnames from 'classnames/bind';
import React from 'react';
import * as styles from './menu.css';
import { Logo } from '../../logo';
import { IconLink } from '../../../../features/icon';
import { MenuProps, MenuState } from '../store';
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const cx = classnames.bind(styles);

class Menu extends React.Component<MenuProps, MenuState> {
  render() {
    return (
      <div className={cx('sidenav', { 'sidenav-open': this.props.toggled })}>
        <div className={cx('side-extension')}></div>
        <div className={cx('sub-side-extension')}></div>
        <div id="menu-container">
          <Logo theme="light"></Logo>
          <div id="menu-content">
            <a href="docs/george.savchenko.resume.pdf">RESUME</a>
            <div id="menu-footer">
              <IconLink
                href="https://github.com/gsavchenko"
                icon={AiFillGithub}
              ></IconLink>
              <IconLink
                href="https://twitter.com/SavchenCode"
                icon={AiOutlineTwitter}
              ></IconLink>
              <IconLink
                href="https://www.linkedin.com/in/georgesavchenko/"
                icon={AiFillLinkedin}
              ></IconLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
