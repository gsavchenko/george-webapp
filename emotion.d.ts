import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      accent: string;
      secondary: string;
      primaryInverse: string;
      secondaryCompliment: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
  }
}
