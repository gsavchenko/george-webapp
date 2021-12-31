import { graphql, Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import Helmet from 'react-helmet';
import classnames from 'classnames';
import Bio from '../../common/components/Bio';
import * as blogPostStyles from './blog-post.css';
import Frontmatter from './models/frontmatter';
import PageContext from './models/page-context';
import { MarkdownRemark } from './models/markdown-remark';

classnames.bind(blogPostStyles);

interface IBlogPostTemplateProps {
  location: string;
  pageContext: PageContext;
  data: {
    markdownRemark: MarkdownRemark;
  };
}

const BlogPostTemplate: React.FC<IBlogPostTemplateProps> = (props) => {
  const { data, pageContext, location } = props;

  const getFrontmatter = (markdownRemark: MarkdownRemark): MarkdownRemark => {
    const frontmatter = markdownRemark ? markdownRemark.frontmatter : new Frontmatter();
    const updatedMarkdownRemark = {
      ...markdownRemark,
      frontmatter
    };

    return updatedMarkdownRemark;
  }

  const getPostPath = (context: PageContext): PageContext => {
    const newPageContext: PageContext = {
      previous: getFrontmatter(context.previous),
      next: getFrontmatter(context.next)
    };

    return newPageContext;
  }

  const post = data.markdownRemark;
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const siteDescription = post.excerpt;
  // const { previous, next } = this.props.pageContext;

  return (
    <div title={siteTitle}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`${post.frontmatter.title} | ${siteTitle}`}
      />
      <Link to="/blog">&larr; Blog</Link>
      <h1>{post.frontmatter.title}</h1>
      <br />
      <p id="date-text">
        {post.frontmatter.date}
      </p>
      {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      <hr className="bottom-space" />
      <Bio />
      <ul id="navigation-container">
        <li>
          <Link to={getPostPath(pageContext).previous.frontmatter.path} rel="prev">
            ←
            {getPostPath(pageContext).previous.frontmatter.title}
          </Link>
        </li>
        <li>
          <Link to={getPostPath(pageContext).next.frontmatter.path} rel="next">
            {getPostPath(pageContext).next.frontmatter.title}
            →
          </Link>
        </li>
      </ul>
    </div>
  );
}

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
