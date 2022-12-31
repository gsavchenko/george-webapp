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

const HomeContent = styled.div({
  marginLeft: '300px',
});

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
          <div>
            <ButtonContainer isOpen={isOpen}>
              <IconButton
                icon={isOpen ? icon.closed : icon.open}
                onClick={handleToggle}
              />
            </ButtonContainer>
            <Logo />
            <Sidebar isOpen={isOpen} />
          </div>
        </MainLayout.Header>
        <MainLayout.Body>
          Hello world!
          <AnimatedDescription />
          <AnimatedBackground />
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
