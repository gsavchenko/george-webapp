import React from 'react';
import styles from './animated-description.component.css';
import classnames from 'classnames';

const cx = classnames.bind(styles);

class AnimatedDescription extends React.Component {
  render() {
    return (
      <div className={cx('description-container')}>
        <section className={cx('rw-wrapper')}>
          <h1 className={cx('rw-title')}>
            <span>Hello stranger! Enjoy. ♥</span>
            <div id='subtitle-container'>
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
  }
}

export default AnimatedDescription;
