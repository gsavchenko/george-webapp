import classnames from 'classnames/bind';
import get from 'lodash/get';
import React from 'react';
import Hemlet from 'react-helmet';
import DisplayImage from '../../../assets/images/main_image.jpg';
import Layout from '../../components/Layout';
import { AnimatedDescription } from './animated-description';
import styles from './home.component.css';
import {
  graphql,
  useStaticQuery
} from 'gatsby';

const cx = classnames.bind(styles);

class Home extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(this, 'props.data.site.siteMetadata.description');

    return (
      <Layout>
        {/* https://github.com/nfl/react-helmet/issues/373 */}
        <Hemlet title={siteTitle} meta={[{name: 'description', content: siteDescription, }, ]}/>
        <AnimatedDescription />
        <img src={DisplayImage} alt={siteTitle} />
      </Layout>
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
