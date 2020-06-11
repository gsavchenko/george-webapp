import { graphql, Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import Helmet from 'react-helmet';
import Bio from '../../components/Bio';
import blogPostStyles from './blog-post.css';
import { Frontmatter, MarkdownRemark, PageContext } from './models';

interface IBlogPostTemplateProps {
  location: string;
  pageContext: PageContext;
  data: {
    markdownRemark: MarkdownRemark;
  };
}

class BlogPostTemplate extends React.Component<IBlogPostTemplateProps, {}> {
  constructor(props) {
    super(props);

    this.getPostPath = this.getPostPath.bind(this);
    this.getFrontmatter = this.getFrontmatter.bind(this);
  }

  private getPostPath(pageContext: PageContext): PageContext {
    const newPageContext: PageContext = {
      previous: this.getFrontmatter(pageContext.previous),
      next: this.getFrontmatter(pageContext.next),
    };

    return newPageContext;
  }

  private getFrontmatter(markdownRemark: MarkdownRemark): MarkdownRemark {
    const frontmatter = markdownRemark ? markdownRemark.frontmatter : new Frontmatter();
    const updatedMarkdownRemark = {
      ...markdownRemark,
      frontmatter,
    };

    return updatedMarkdownRemark;
  }

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = post.excerpt;
    // const { previous, next } = this.props.pageContext;

    return (
      <div title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <Link to='/blog'>&larr; Blog</Link>
        <h1>{post.frontmatter.title}</h1>
        <br />
        <p id={blogPostStyles['date-text']}>
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr className={blogPostStyles['bottom-space']}/>
        <Bio />
        <ul id={blogPostStyles['navigation-container']}>
          <li>
              <Link to={this.getPostPath(this.props.pageContext).previous.frontmatter.path} rel='prev'>
                ← {this.getPostPath(this.props.pageContext).previous.frontmatter.title}
              </Link>
          </li>
          <li>
              <Link to={this.getPostPath(this.props.pageContext).next.frontmatter.path} rel='next'>
                {this.getPostPath(this.props.pageContext).next.frontmatter.title} →
              </Link>
          </li>
        </ul>
      </div>
    );
  }
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
