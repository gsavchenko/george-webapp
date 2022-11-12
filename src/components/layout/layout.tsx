import React from 'react'
import { Global, css, useTheme } from '@emotion/react'
import styled from '@emotion/styled'

const Wrapper = styled('div')`
  border: 2px solid green;
  padding: 10px;
`

export default function Layout({ children }) {
  const theme = useTheme()

  return (
    <Wrapper>
      <Global
        styles={css`
          div {
            color: blue;
            background: ${theme.colors.primary};
          }
        `}
      />
      {children}
    </Wrapper>
  )
}
