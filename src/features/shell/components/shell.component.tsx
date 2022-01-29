import React from 'react'
import classnames from 'classnames/'

import { RootState } from '../../../app/store'
import { HeaderContainer } from '../containers'
import { Footer } from './footer'
import { ShellProps } from '../store'

import './shell.component.css'

const Shell = (props: ShellProps) => {
  const { children } = props
  const menuToggled = (state: RootState) => state.menu.toggled

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
