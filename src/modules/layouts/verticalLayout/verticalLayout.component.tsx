import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

const Top = ({ children }: SectionProps): JSX.Element => (
  <div
    css={css`
      margin-bottom: 16px;
    `}
  >
    {children}
  </div>
);

const Bottom = ({ children }: SectionProps): JSX.Element => (
  <div>{children}</div>
);

const LayoutContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

interface VerticalLayoutProps {
  children: ReactNode;
}

export const VerticalLayout = ({
  children,
}: VerticalLayoutProps): JSX.Element => (
  <LayoutContainer>{children}</LayoutContainer>
);

VerticalLayout.Top = Top;
VerticalLayout.Bottom = Bottom;
