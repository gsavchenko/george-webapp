import classnames from 'classnames/bind'
import React from 'react'
import { isNil } from 'ramda'

import { IconProps } from '../icon.component'

import * as styles from './icon-button.component.css'

interface IconButtonProps extends IconProps {
  onClick: () => void
}

const cx = classnames.bind(styles)

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { icon, onClick } = props
  const IconComponent = icon

  const toggle = (): void => {
    if (!isNil(onClick)) onClick()
  }

  return (
    <div
      className={cx('menu-button')}
      onClick={toggle}
      onKeyPress={toggle}
      role="button"
      tabIndex={0}
    >
      <div className={cx('icon-container')}>
        <IconComponent className={cx('icon')} size={36} />
      </div>
    </div>
  )
}

export default IconButton
