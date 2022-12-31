import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

const Header = ({ children }: SectionProps): JSX.Element => (
  <div
    css={css`
      padding: 20px;
    `}
  >
    {children}
  </div>
);

const BodyContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flex: '1',
});

const Body = ({ children }: SectionProps): JSX.Element => (
  <BodyContainer>{children}</BodyContainer>
);

const FooterContainer = styled.div(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  textAlign: 'center',
  padding: '25px 25px',
  fontSize: '14px',
  color: theme.colors.primaryInverse,
  whiteSpace: 'nowrap',
}));

const Footer = ({ children }: SectionProps): JSX.Element => (
  <FooterContainer>{children}</FooterContainer>
);

const MainLayoutContainer = styled.div({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  overflow: 'hidden',
});

interface VerticalLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: VerticalLayoutProps): JSX.Element => (
  <MainLayoutContainer>{children}</MainLayoutContainer>
);

MainLayout.Header = Header;
MainLayout.Body = Body;
MainLayout.Footer = Footer;
