import { graphql, Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../app/components/Layout';

interface IBlogIndexProps {
  location: string;
}

class BlogIndex extends React.Component<IBlogIndexProps, {}> {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description',
    );
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Blog | ${siteTitle}`}
        />
        <h2>Blog</h2>
          const title = get(node, 'frontmatter.title') || node.frontmatter.path;
          return (
            <div key={posts[0].node.frontmatter.path}>
              <h3>
                <Link to={posts[0].node.frontmatter.path}>
                  {posts[0].node.frontmatter.title}
                </Link>
              </h3>
              <small>{posts[0].node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: posts[0].node.excerpt }} />
            </div>
      </Layout>
    );
  }
}

export default BlogIndex;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            type
          }
        }
      }
    }
  }
`;
