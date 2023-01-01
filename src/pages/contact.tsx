import { graphql } from 'gatsby';
// import get from 'lodash/get';
import React from 'react';

// import contactData from '../data/contact';

class Contact extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    // const siteDescription = get(
    //   this,
    //   'props.data.site.siteMetadata.description',
    // );
    return (
      <div>
        {/* <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Contact | ${siteTitle}`}
        /> */}
        <h2>Contact</h2>
        <br />
      </div>
    );
  }
}

export default Contact;

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
