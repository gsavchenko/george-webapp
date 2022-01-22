import { IconProps } from '../icon'
import React from 'react'
import { isNil } from 'ramda'

import './icon-button.css'

interface IconButtonProps extends IconProps {
  onClick?: () => void
}

const IconButton = (props: IconButtonProps) => {
  const { icon, onClick } = props
  const Icon = icon

  const toggle = () => {
    if (!isNil(onClick)) {
      onClick()
    }
  }

  return (
    <div className="menu-button" onClick={toggle}>
      <div className="icon-container">
        <Icon className="icon" size={36}></Icon>
      </div>
    </div>
  )
}

export default IconButton
