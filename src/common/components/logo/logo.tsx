import React from 'react';
import classNames from 'classnames';

import VerticalLayout from '../vertical-layout/vertical-layout';
import { LogoProps } from './logo.types';

import './logo.css'

const Logo = (props: LogoProps) => {
  const { theme } = props;
  
  const logo = (
      <svg id='logo' className={theme}
        enableBackground='new 0 0 1081.6 1081.8' version='1.1' viewBox='0 0 1081.6 1081.8' xmlns='http://www.w3.org/2000/svg'>
        <path d='m541.1 1081.8c-299.9-0.6-542.4-242.3-541.1-543.4 1.3-300.1 244.5-539.7 543.2-538.4 299.3 1.3 540.2 244.2 538.5 544-1.7 296.5-241.2 536.9-540.6 537.8zm503.3-540.8c-0.2-276.3-221.7-502.3-501-503.7-279.7-1.4-504.5 222.8-506.1 500.5-1.6 279.2 222.1 505.5 501.4 506.6 281.8 1 505.3-226.2 505.7-503.4z'/>
        <path d='m661.7 540.8h346.9c0.2 37.2-4.2 73.6-12.9 109.4-18.8 77.4-54.8 145.8-108.3 204.8-53 58.5-117 100.8-191.4 127.2-44.6 15.8-90.5 24.4-138.2 26.2v-103.5c105.2-7.3 193-49.6 261.7-130 32.6-38.2 55.6-81.7 70.2-130.4h-332v-570.4c11-3.4 79.7 7.2 114.9 17.8 90.8 27.2 166.8 76.9 227.6 149.6 47.8 57.2 79.7 122.4 96.7 195.4h-107.2c-22.5-73-63.2-133.7-122.9-181.4-30.6-24.4-83.4-53.2-105-57.6-0.8 3.4-1.1 335.1-0.1 342.9z'/>
        <path d='m523.7 73.5v102.9c-109.5 7.9-200.1 52.7-268.7 138.8-53.9 67.6-80 145.6-78.3 232 3.5 174.6 123.7 297.8 243.3 336.7v-239.4h-91.9v-103.5h195.6v466.9c-109.3-1.6-269.7-54.4-372-207.4-99.2-148.4-105.3-339.9-15.1-495 91.9-158.2 252.3-228.5 387.1-232z'/>
      </svg>
    );

  const text = (
    <label className={classNames('author', theme)}>
      <span id='by'><i>by</i></span>
      <span id='name'><b>George Savchenko</b></span>
    </label>
  );

  return (
    <VerticalLayout
      top={logo}
      bottom={text}>
    </VerticalLayout>
  );
}

export default Logo;
