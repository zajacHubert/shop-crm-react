import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  bg: {
    default: '#fff',
    bgGray: '#4b5563',
  },
  text: {
    default: '#000',
  },
  btn: {
    bgYellow: '#ecc94b',
    bgBrown: '#d69e2e',
  },
  border: {
    gray: '#9ca3af',
    boxShadow:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
};

export const darkTheme: DefaultTheme = {
  bg: {
    default: '#000',
    bgGray: '#4b5563',
  },
  text: {
    default: '#fff',
  },
  btn: {
    bgYellow: '#ecc94b',
    bgBrown: '#d69e2e',
  },
  border: {
    gray: '#9ca3af',
    boxShadow:
      '0 5px 25px 5px rgba(0,255,255,0.7), 0 10px 10px 5px rgba(0,255,255,0.04)',
  },
};
