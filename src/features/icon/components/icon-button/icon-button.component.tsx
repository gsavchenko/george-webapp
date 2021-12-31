import { IconButtonProps } from '../../store';
import * as styles from './icon-button.component.css';
import classnames from 'classnames/bind';
import React from 'react';
import { isNil } from 'ramda';

const cx = classnames.bind(styles);

class IconButton extends React.Component<IconButtonProps, {}> {
  constructor(props: IconButtonProps) {
    super(props);

    this._toggle = this._toggle.bind(this);
  }

  render() {
    const IconProp = this.props.icon;
    return (
      <div className={cx('menu-button')} onClick={this._toggle}>
        <div className={cx('icon-container')}>
          <IconProp className={cx('icon')} size={36}></IconProp>
        </div>
      </div>
    );
  }

  private _toggle(): void {
    const emptyCallback = () => {};

    !isNil(this.props.onClick)
      ? this.props.onClick()
      : emptyCallback();
  }
}

export default IconButton;
