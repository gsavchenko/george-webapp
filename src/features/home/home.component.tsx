import { AnimatedDescription } from './animated-description';
import { graphql, useStaticQuery } from 'gatsby';
import classnames from 'classnames/bind';
// import get from 'lodash/get';
import React from 'react';
import * as styles from './home.component.css';
import { AnimatedBackground } from '../../common/components/animated-background';
import Layout from '../../components/layout/layout';
import { Canvas, useFrame } from '@react-three/fiber'
import { Box } from '../../components/three/box.component';

classnames.bind(styles);

class Home extends React.Component {
  render() {
    // const siteTitle = 'George Savchenko';
    // const siteDescription = get(this, 'props.data.site.siteMetadata.description');

    return (
      <>
      <Layout>Hello world!</Layout>
      <AnimatedDescription />
      <AnimatedBackground />
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
      </>
    );
  }
}

export default Home;

export const useQuery = () => useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`);
