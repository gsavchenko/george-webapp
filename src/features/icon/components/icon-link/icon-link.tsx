import { IconProps } from '../icon'
import React from 'react'

import './icon-link.css'

interface IconLinkProps extends IconProps {
  href: string
}

const IconLink = (props: IconLinkProps) => {
  const { icon, href } = props
  const Icon = icon

  return (
    <div className="icon-container">
      <a href={href}>
        <Icon className="icon" size={36}></Icon>
      </a>
    </div>
  )
}

export default IconLink
