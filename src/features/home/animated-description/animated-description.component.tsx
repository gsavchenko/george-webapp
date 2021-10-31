import React from 'react';
import classnames from 'classnames';

import * as styles from './animated-description.component.css';

const cx = classnames.bind(styles);

const AnimatedDescription: React.FC = () => (
  <div className={cx('description-container')}>
    <section className={cx('rw-wrapper')}>
      <h1 className={cx('rw-title')}>
        <span>Hello Universe. Enjoy. ❤️</span>
        <div id="subtitle-container">
          <span className={cx('rw-subtitle')}>I am </span>
          <p className={cx('rw-words', 'rw-words-1')}>
            <span>George.</span>
            <span>a tinkerer.</span>
            <span>a learner.</span>
            <span>a professional.</span>
            <span>a developer.</span>
            <span>making software fun.</span>
          </p>
        </div>
      </h1>
    </section>
  </div>
);
export default AnimatedDescription;
