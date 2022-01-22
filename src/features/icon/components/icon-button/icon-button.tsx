import { IconButtonProps } from '../../store'
import React from 'react'
import { isNil } from 'ramda'

import './icon-button.css'

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
