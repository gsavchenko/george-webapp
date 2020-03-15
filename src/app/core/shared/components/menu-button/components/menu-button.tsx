import classnames from 'classnames/bind';
import { fromNullable } from 'fp-ts/lib/Option';
import equals from 'ramda/src/equals';
import React from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { MenuButtonState } from '../store/menu-button.reducer';
import { MenuButtonProps } from '../store/menu-button.types';
import styles from './menu-button.css';

const cx = classnames.bind(styles);

class MenuButton extends React.Component<MenuButtonProps, MenuButtonState> {
  private _icon = {
    open: <MdMenu
            size={36}
            className={cx('icon')}/>,
    closed: <MdClose
              size={36}
              className={cx('icon')}/>
  };

  constructor(props: MenuButtonProps) {
    super(props);

    this._toggle = this._toggle.bind(this);
  }

  render() {
    return (
        <div className={cx('menu-button')} onClick={this._toggle}>
          <div className={cx('icon-container')}>
            {equals(this.props.toggled, true) ? this._icon.closed : this._icon.open}
          </div>
        </div>
    );
  }

  private _toggle(): void {
    const emptyCallback = () => {};
    const callback = fromNullable(this.props.onClick).getOrElse(emptyCallback);

    equals(this.props.toggled, false)
    ? this.props.turnOn()
    : this.props.turnOff();

    callback();
  }
}

export default MenuButton;
