import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      primaryInverse: string;
      secondaryCompliment: string;
      positive: string;
      negative: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
  }
}
