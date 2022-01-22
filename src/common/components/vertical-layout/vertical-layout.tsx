import React from 'react'

import './vertical-layout.css'

interface VerticalLayoutProps {
  top: object
  bottom: object
}

const VerticalLayout = (props: VerticalLayoutProps) => {
  const { top, bottom } = props

  return (
    <div className="stacklayout-container">
      <div className="top">{top}</div>
      <div>{bottom}</div>
    </div>
  )
}

export default VerticalLayout
