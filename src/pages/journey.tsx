import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import Helmet from 'react-helmet';
import { FaAward } from 'react-icons/fa';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Layout from '../app/components/Layout';
import LightboxImage from '../app/components/LightboxImage';
import Image1 from './../assets/images/image1.jpg';

class Journey extends React.Component {
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
          title={`Journey | ${siteTitle}`}
        />

        <h2>Journey</h2>

        <div>
          <VerticalTimeline animate={false}>
              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date={'some date'}
                iconStyle={{ background: '#fff', color: '#34495e' }}
                icon={<FaAward />}
                key={'headline'}
              >
                <h3 className='vertical-timeline-element-title'>
                  {'headline'}
                </h3>
                <br />
                <LightboxImage
                  src={Image1}
                  title={'headline'}
                  caption={'description'}
                />
                {'description'}
              </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </Layout>
    );
  }
}

export default Journey;

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
