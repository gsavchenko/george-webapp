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

const Card = styled.div(({ theme }) => ({
  display: 'flex',
  background: 'rgba(255, 255, 255, 0.3)',
  borderRadius: '5px',
  padding: '20px',
  margin: '30px',
  flexDirection: 'column',
  backdropFilter: 'blur(3px)',
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

  '@media only screen and (min-width: 300px)': {
    flexDirection: 'column-reverse',
  },
  '@media only screen and (min-width: 1520px)': {
    flexDirection: 'row',
  },
}));

const HeaderContainer = styled.div<SidebarProps>(({ isOpen }) => ({
  transition: '0.40s',
  transform: `translate(${isOpen ? '300px' : '0'}, 0)`,
}));

const ProfilePicture = styled.img({
  width: '300px',
  height: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media only screen and (min-width: 300px)': {
    width: '150px',
    height: '150px',
  },
  '@media only screen and (min-width: 580px)': {
    width: '300px',
    height: '300px',
  },
});

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
            <Card>
              <Title>About Me</Title>
              <Description>
                Hello. I am a <b>Canadian</b> front-end developer currently
                living in <b>Ottawa</b>! Canada's capital city. I love making
                software that is fun to use.
              </Description>
              <Description>
                I got my <u>Bachelor of Computing</u> at the University of{' '}
                <b>Guelph</b>. Afterwards, I moved to <b>Montreal</b> for my
                first full-time job with <b>Vish</b> creating inventory
                management software for hair salons. I helped them rebuild their
                flagship product as part of an effort to support newer versions
                of iOS and upgrade the web technologies the app was using.
              </Description>
              <Description>
                While there, I attempted to start a consulting company for web
                development called Grae Consulting Inc. It didn't work out that
                well! At least I tried. Maybe I'll start a company again one
                day...
              </Description>
              <Description>
                Next, I moved to <b>Ottawa</b> to join a cyber security company{' '}
                <b>CybernetIQ</b> working on mapping networks to provide insight
                into possible network threats for enterprises.
              </Description>
              <Description>
                Now I'm proud to say I work for <b>Affinity</b> based in{' '}
                <b>San Francisco</b> helping build out the next generation
                relationship intelligence platform.
              </Description>
            </Card>
            <Card>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ProfilePicture
                  src="images/profile_picture.png"
                  alt="Profie Picture"
                />
              </div>
            </Card>
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

// I got my Bachelor of Computing at the University of Guelph. Afterwards, I moved to Montreal for my first job with a Canadian company Vish creating inventory management software for hair salons. I helped them rebuild their flagship product as part of an effort to support newer versions of iOS and upgrade the web technologies the app was using.
// While there, I attempted to start a consulting company for web development called GRAE. It didn't work out that well! At least I tried. Maybe I'll start a company again one day...
// Next, I moved to Ottawa to join a cyber security CybernetIQ working on mapping networks to provide insight into possible network threats for enterprises.
// Now I'm proud to say I work for Affinity based in San Francisco helping build out the next generation relationship intelligence platform.
