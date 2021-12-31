import { AnimatedDescription } from './animated-description';
import { graphql, useStaticQuery } from 'gatsby';
import classnames from 'classnames/bind';
import get from 'lodash/get';
import React from 'react';
import Hemlet from 'react-helmet';
import * as styles from './home.component.css';
import { AnimatedBackground } from '../../common/components/animated-background';

classnames.bind(styles);

class Home extends React.Component {
  render() {
    const siteTitle = 'George Savchenko';
    const siteDescription = get(this, 'props.data.site.siteMetadata.description');

    return (
      <div>
        <Hemlet title={siteTitle} meta={[{name: 'description', content: siteDescription, }]}/>
        <AnimatedDescription />
        <AnimatedBackground />
      </div>
    );
  }
}

export default Home;

export const query = () => useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`);
