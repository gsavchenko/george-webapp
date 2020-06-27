import { AnimatedDescription } from './animated-description';
import { graphql, useStaticQuery } from 'gatsby';
import classnames from 'classnames/bind';
import get from 'lodash/get';
import React from 'react';
import Hemlet from 'react-helmet';
import styles from './home.component.css';
import { AnimatedBackground } from '../../core/shared/components';

const cx = classnames.bind(styles);

class Home extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(this, 'props.data.site.siteMetadata.description');

    return (
      <div>
        <div className={cx('top-content')}>
        <Hemlet title={siteTitle} meta={[{name: 'description', content: siteDescription, }]}/>
        <AnimatedDescription />
      </div>
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
