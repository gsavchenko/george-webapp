import { Theme } from '@emotion/react';

enum colors {
  LightSkyBlue = '#9de1f6',
  SlateBlue = '#6564db',
  PersianBlue = '#232ed1',
  Cyprus = '#101d42',
  BlackPearl = '#0d1317',
  LuckyPoint = '#2e294e',
}

export const theme: Theme = {
  colors: {
    primary: colors.LightSkyBlue,
    secondary: colors.SlateBlue,
    primaryInverse: colors.BlackPearl,
    secondaryCompliment: colors.LuckyPoint,
    positive: '',
    negative: '',
  },
  fonts: {
    primary: 'Merriweather, serif',
    secondary: 'Source Sans Pro, sans-serif',
  },
};

// * {
//   /* Coolors Exported Palette - https://coolors.co/9de1f6-6564db-232ed1-101d42-0d1317-2e294e */
//   --color-light-sky-blue: #9de1f6;
//   --color-slate-blue: #6564db;
//   --color-persian-blue: #232ed1;
//   --color-cyprus: #101d42;
//   --color-black-pearl: #0d1317;
//   --color-lucky-point: #2e294e;

//   /* Colors */
//   --primary: var(--color-light-sky-blue);
//   --primary-inverse: var(--color-black-pearl);
//   --secondary: var(--color-slate-blue);
//   --secondary-compliment: var(--color-lucky-point);
//   --accent: var(--color-persian-blue);
//   --tertiary: var(--color-cyprus);
// }
// body {
//   margin: 0;
//   background-color: var(--primary);
//   color: #fff;
// }

// @define-mixin primary-font {
//   font-family: 'Merriweather', serif;
// }

// @define-mixin secondary-font {
//   font-family: 'Source Sans Pro', sans-serif;
// }
