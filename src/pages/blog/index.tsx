import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'

interface BlogIndexProps {
  location: string
}

const BlogIndex = (props: BlogIndexProps) => {
  const siteTitle = get(props, 'props.data.site.siteMetadata.title')
  const siteDescription = get(props, 'props.data.site.siteMetadata.description')
  const posts = get(props, 'props.data.allMarkdownRemark.edges')
  // const title = get(node, 'frontmatter.title') || node.frontmatter.path;

  return (
    <div title={siteTitle}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`Blog | ${siteTitle}`}
      />
      <h2>Blog</h2>
      {posts !== undefined && (
        <div key={posts[0].node.frontmatter.path}>
          <h3>
            <Link to={posts[0].node.frontmatter.path}>
              {posts[0].node.frontmatter.title}
            </Link>
          </h3>
          <small>{posts[0].node.frontmatter.date}</small>
          <p dangerouslySetInnerHTML={{ __html: posts[0].node.excerpt }} />
        </div>
      )}
    </div>
  )
}

export default BlogIndex

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
`
