import { graphql, useStaticQuery } from 'gatsby';
import classnames from 'classnames/bind';
import get from 'lodash/get';
import React from 'react';
import Hemlet from 'react-helmet';

import AnimatedDescription from './animated-description/animated-description.component';
import AnimatedBackground from '../../common/components/animated-background/animated-background.component';

import * as styles from './home.component.css';

classnames.bind(styles);

const Home: React.FC = () => {
  const siteTitle = 'George Savchenko';
  const siteDescription = get(this, 'props.data.site.siteMetadata.description');

  return (
    <div>
      <Hemlet title={siteTitle} meta={[{ name: 'description', content: siteDescription }]} />
      <AnimatedDescription />
      <AnimatedBackground />
    </div>
  );
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
