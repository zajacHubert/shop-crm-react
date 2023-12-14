import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: {
      bgGray: string;
    };
    btn: {
      bg: string;
    };
  }
}
