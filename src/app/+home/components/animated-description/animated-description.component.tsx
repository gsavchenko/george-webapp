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
            <span>Hi, my name is George!</span>
            <br/>
            <span className={cx('rw-subtitle')}>I am a </span>
            <p className={cx('rw-words', 'rw-words-1')}>
              <span>tinkerer.</span>
              <span>constant learner.</span>
              <span>builder.</span>
              <span>professional.</span>
              <span>software developer.</span>
              <span>an ideal candidate.</span>
            </p>
          </h1>
        </section>
      </div>
    );
  }
}

export default AnimatedDescription;
