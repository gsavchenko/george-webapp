import { graphql, Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
// import Helmet from 'react-helmet'

import Bio from '../../components/common/Bio';
import { Frontmatter, MarkdownRemark, PageContext } from './models';

import './blog-post.css';

interface BlogPostTemplateProps {
  location: string;
  pageContext: PageContext;
  data: {
    markdownRemark: MarkdownRemark;
  };
}

const BlogPostTemplate = (props: BlogPostTemplateProps) => {
  const { pageContext, data } = props;

  const getPostPath = (pageContext: PageContext): PageContext => {
    const newPageContext: PageContext = {
      previous: getFrontmatter(pageContext.previous),
      next: getFrontmatter(pageContext.next),
    };

    return newPageContext;
  };

  const getFrontmatter = (markdownRemark: MarkdownRemark): MarkdownRemark => {
    const frontmatter = markdownRemark
      ? markdownRemark.frontmatter
      : new Frontmatter();
    const updatedMarkdownRemark = {
      ...markdownRemark,
      frontmatter,
    };

    return updatedMarkdownRemark;
  };

  const post = data.markdownRemark;
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  // const siteDescription = post.excerpt
  // const { previous, next } = this.props.pageContext;

  return (
    <div title={siteTitle}>
      {/* <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`${post.frontmatter.title} | ${siteTitle}`}
      /> */}
      <Link to="/blog">&larr; Blog</Link>
      <h1>{post.frontmatter.title}</h1>
      <br />
      <p id="date-text">{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr className="bottom-space" />
      <Bio />
      <ul id="navigation-container">
        <li>
          <Link
            to={getPostPath(pageContext).previous.frontmatter.path}
            rel="prev"
          >
            ← {getPostPath(pageContext).previous.frontmatter.title}
          </Link>
        </li>
        <li>
          <Link to={getPostPath(pageContext).next.frontmatter.path} rel="next">
            {getPostPath(pageContext).next.frontmatter.title} →
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
      }
      fields {
        slug
      }
    }
  }
`;
