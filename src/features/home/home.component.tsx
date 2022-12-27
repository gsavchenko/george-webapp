import { AnimatedDescription } from './animated-description';
import { graphql, useStaticQuery } from 'gatsby';
import classnames from 'classnames/bind';
// import get from 'lodash/get';
import React from 'react';
import * as styles from './home.component.css';
import { AnimatedBackground } from '../../common/components/animated-background';
import Layout from '../../components/layout/layout';
import { Canvas, useThree } from '@react-three/fiber';
import { Box } from '../../components/three/box.component';
import { NodePoints } from '../../components/three/nodes/nodePoints/nodePoints.component';
import { useTheme } from '@emotion/react';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Nodes } from '../../components/three/nodes';

classnames.bind(styles);

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        width: '50vw',
        height: '50vh',
      }}
    >
      <Layout>Hello world!</Layout>
      <AnimatedDescription />
      <AnimatedBackground />
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          position: 'fixed',
          top: '0',
          left: '0',
          border: 'thick double #32a1ce',
        }}
      >
        <Canvas>
          <>
            <OrbitControls makeDefault />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
            <Nodes />
          </>
        </Canvas>
      </div>
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
