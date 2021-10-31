import classnames from 'classnames/bind';
import React from 'react';
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin
} from 'react-icons/ai';

import { Logo } from '../../logo';
import { IconLink } from '../../../../features/icon/components/icon-link';
import { MenuProps } from '../store';

import * as styles from './menu.css';

const cx = classnames.bind(styles);

const Menu: React.FC<MenuProps> = (props) => {
  const { toggled } = props

  return (
    <div className={cx('sidenav', { 'sidenav-open': toggled })}>
      <div className={cx('side-extension')} />
      <div className={cx('sub-side-extension')} />
      <div id="menu-container">
        <Logo theme="light" />
        <div id="menu-content">
          <a href="docs/george.savchenko.resume.pdf">RESUME</a>
          <div id="menu-footer">
            <IconLink href="https://github.com/gsavchenko" icon={AiFillGithub} />
            <IconLink href="https://twitter.com/SavchenCode" icon={AiOutlineTwitter} />
            <IconLink href="https://www.linkedin.com/in/georgesavchenko/" icon={AiFillLinkedin} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
