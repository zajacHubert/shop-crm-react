import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

ul {
  list-style: none;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: inherit;
}

input,
textarea,
select {
  outline: none;
  border: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}

button {
  cursor: pointer;
  border: none;
}
`;

export default GlobalStyle;
