import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: {
      default: string;
      bgGray: string;
    };
    text: {
      default: string;
      error: string;
    };
    btn: {
      bgYellow: string;
      bgBrown: string;
    };
    border: {
      gray: string;
      boxShadow: string;
    };
  }
}
