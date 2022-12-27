import { AnimatedDescription } from './animated-description';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { AnimatedBackground } from '../../common/components/animated-background';
import Layout from '../../components/layout/layout';
import { Canvas } from '@react-three/fiber';
import { useTheme } from '@emotion/react';
import { OrbitControls } from '@react-three/drei';
import { Nodes } from '../../components/three/nodes';
import styled from '@emotion/styled';

const CanvasBackground = styled.div((props) => ({
  width: '100%',
  height: '100%',
  display: 'block',
  position: 'fixed',
  top: '0',
  left: '0',
  border: 'thick double #32a1ce',
  backgroundColor: props.theme.colors.primary,
  zIndex: '-1',
}));

const Home: React.FC = () => {
  const theme = useTheme();
  const enableOrbitControls = false;

  return (
    <div
      style={{
        width: '50vw',
        height: '50vh',
        backgroundColor: theme.colors.primary,
      }}
    >
      <Layout>Hello world!</Layout>
      <AnimatedDescription />
      <AnimatedBackground />
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
    </div>
  );
};

export default Home;

export const useQuery = () =>
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
