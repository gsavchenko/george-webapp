import { AnimatedDescription } from './animated-description';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useCallback } from 'react';
import { AnimatedBackground } from '../../common/components/animated-background';
import { MainLayout } from '../../components/layouts/mainLayout/mainLayout.component';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Nodes } from '../../components/three/nodes';
import styled from '@emotion/styled';
import { MdMenu, MdClose } from 'react-icons/md';
import { useSidebar, Sidebar } from '../../common/components';
import { Logo } from '../../common/components/logo';
import { IconButton } from '../icon';
import { css } from '@emotion/react';

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

const Title = styled.h1(({ theme }) => ({
  fontFamily: theme.fonts.primary,
  color: theme.colors.primaryInverse,
}));

const Description = styled.p(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  color: theme.colors.primaryInverse,
}));

const TransparentBackground = styled.div(({ theme }) => ({
  display: 'flex',
  background: 'rgba(157, 225, 246, 0.8)',
  borderRadius: '5px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: theme.colors.primaryInverse,
  padding: '30px',
  marginRight: '30px',
}));

interface SidebarProps {
  isOpen?: boolean;
}

const ContentContainer = styled.div<SidebarProps>(({ isOpen }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  transition: '0.40s',
  transform: `translate(${isOpen ? '300px' : '0'}, 0)`,
}));

const HeaderContainer = styled.div<SidebarProps>(({ isOpen }) => ({
  transition: '0.40s',
  transform: `translate(${isOpen ? '300px' : '0'}, 0)`,
}));

const Home: React.FC = () => {
  const enableOrbitControls = false;

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
      <MainLayout>
        <MainLayout.Header>
          <ButtonContainer isOpen={isOpen}>
            <IconButton
              icon={isOpen ? icon.closed : icon.open}
              onClick={handleToggle}
            />
          </ButtonContainer>
          <HeaderContainer isOpen={isOpen}>
            <Logo />
          </HeaderContainer>

          <Sidebar isOpen={isOpen} />
        </MainLayout.Header>
        <MainLayout.Body>
          <ContentContainer isOpen={isOpen}>
            <TransparentBackground>
              <div style={{ flexDirection: 'column' }}>
                <Title>About Me</Title>
                <Description>
                  Hello. I am a Canadian frontend developer currently living in
                  Ottawa! Canada's capital city. I got my Bachelors of Computing
                  at the University of Guelph.
                </Description>
                <Description>
                  Afterwards, I moved to Montreal for my first job with a
                  Canadian company Vish creating inventory management software
                  for hair salons. There I assisted them with their flagship
                  product. I helped rebuild their application as part of an
                  effort to support newer verions of iOS and upgrade the web
                  technologies the app was using.
                </Description>
                <Description>
                  While I was there I attempted to start a consulting company
                  for web development called GRAE. It didn't work out that well.
                </Description>
                <Description>
                  Next, I moved to Ottawa to work for a cyber security
                  CybernetIQ working on mapping networks to provide insight into
                  possible network threats for enterprises.
                </Description>
                <Description>
                  Now I'm proud to say I work for Affinity helping build out the
                  next generation of relationship intelligence platorms.
                </Description>
              </div>
            </TransparentBackground>
            <TransparentBackground>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src="images/profile_picture.jpg"
                  alt="Profie Picture"
                  style={{
                    width: '300px',
                    height: '300px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              </div>
            </TransparentBackground>
          </ContentContainer>
        </MainLayout.Body>
        <MainLayout.Footer>
          <p>Copyright © 2023 George Savchenko. All Rights Reserved.</p>
        </MainLayout.Footer>
      </MainLayout>
      <CanvasBackground>
        <Canvas>
          <>
            {enableOrbitControls && <OrbitControls makeDefault />}
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Nodes />
          </>
        </Canvas>
      </CanvasBackground>
    </>
  );
};

export default Home;

export const useQuery = (): string =>
  useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
