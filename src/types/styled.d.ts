import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: {
      bgGray: string;
    };
    btn: {
      bgYellow: string;
      bgBrown: string;
    };
    border: {
      gray: string;
    };
  }
}
