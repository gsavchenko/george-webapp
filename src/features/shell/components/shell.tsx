import classnames from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../../app/store'
import { HeaderContainer } from '../containers'
import { Footer } from './footer'
import { ShellProps } from '../store'

import './shell.css'

const Shell = (props: ShellProps) => {
  const { children } = props
  const menuToggled = useSelector((state: RootState) => state.menu.toggled)

  return (
    <div className={classnames('container', { 'sidenav-open': menuToggled })}>
      <HeaderContainer></HeaderContainer>
      <div className={classnames('body', { 'sidenav-open': menuToggled })}>
        {children}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Shell
