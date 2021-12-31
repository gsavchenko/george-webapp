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
import LightboxImage from '../common/components/LightboxImage';

class Journey extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description',
    );

    return (
      <div>
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
                {'description'}
              </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
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
