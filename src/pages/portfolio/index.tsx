import { graphql, Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import Helmet from 'react-helmet';

import Layout from '../../app/components/Layout';
import portfolioData from '../../app/data/portfolio';

class PortfolioIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description',
    );

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Portfolio | ${siteTitle}`}
        />
        <h2>Portfolio</h2>
        <br />
        <div style={{ textAlign: 'center' }}>
          <Grid fluid={true}>
            <Row />
          </Grid>
        </div>
      </Layout>
    );
  }
}

export default PortfolioIndex;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
