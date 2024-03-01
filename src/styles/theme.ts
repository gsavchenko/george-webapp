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
    accent: colors.PersianBlue,
  },
  fonts: {
    primary: 'Merriweather, serif',
    secondary: 'Source Sans Pro, sans-serif',
  },
};
