import React from 'react'
import { IconType } from 'react-icons'

import './icon.css'

export interface IconProps {
  icon: IconType
}

const Icon = (props: IconProps) => {
  const { icon } = props
  const Icon = icon

  return <Icon className="icon" size={36}></Icon>
}

export default Icon
