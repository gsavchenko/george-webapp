import styled from '@emotion/styled';
import { IconButton } from '../../common/icon';
import { ReactNode, useCallback } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { Sidebar, useSidebar } from '../../common';
import React from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Nodes } from '../../three';

const CanvasBackground = styled.div((props) => ({
  width: '100%',
  height: '100%',
  display: 'block',
  position: 'fixed',
  top: '0',
  left: '0',
  backgroundColor: props.theme.colors.primary,
  zIndex: '-1',
}));

interface SectionProps {
  children?: ReactNode;
}

interface SidebarProps {
  isOpen?: boolean;
}

const ButtonContainer = styled.div<SidebarProps>(({ isOpen }) => ({
  top: '20px',
  left: '20px',
  position: 'fixed',
  transition: '0.44s',
  zIndex: '10',
  paddingLeft: isOpen ? '300px' : '0',

  '@media screen and (max-width: 370px)': {
    paddingLeft: '0px',
  },
}));

const Header = ({ children }: SectionProps): JSX.Element => {
  const icon = {
    open: MdMenu,
    closed: MdClose,
  };

  const { isOpen, openSidebar, closeSidebar } = useSidebar();

  const handleToggle = useCallback(() => {
    isOpen ? closeSidebar() : openSidebar();
  }, [isOpen]);

  return (
    <>
      <ButtonContainer isOpen={isOpen}>
        <IconButton
          icon={isOpen ? icon.closed : icon.open}
          hideOnScroll={!isOpen}
          onClick={handleToggle}
        />
      </ButtonContainer>
      {children}
      <Sidebar isOpen={isOpen} />
    </>
  );
};

const BodyContainer = styled.div({
  display: 'flex',
  flex: '1',
  margin: '0 350px',
  marginTop: '100px',
  flexDirection: 'column',

  '@media only screen and (min-width: 300px)': {
    margin: '0',
  },
  '@media only screen and (min-width: 800px)': {
    margin: '0 150px',
  },
  '@media only screen and (min-width: 1520px)': {
    margin: '0 350px',
  },
  '@media only screen and (min-width: 1930px)': {
    margin: '0 600px',
  },
});

const Body = ({ children }: SectionProps): JSX.Element => (
  <>
    <BodyContainer>{children}</BodyContainer>
    <CanvasBackground>
      <Canvas>
        <>
          {false && <OrbitControls makeDefault />}
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Nodes />
        </>
      </Canvas>
    </CanvasBackground>
  </>
);

const FooterContainer = styled.div(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  textAlign: 'center',
  padding: '25px 25px',
  fontSize: '14px',
  color: theme.colors.primaryInverse,
  whiteSpace: 'nowrap',
}));

const Footer = ({ children }: SectionProps): JSX.Element => {
  const fullYear = new Date().getFullYear();

  return (
    <FooterContainer>
      {children}
      <p>Copyright © {fullYear} George Savchenko. All Rights Reserved.</p>
    </FooterContainer>
  );
};

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
