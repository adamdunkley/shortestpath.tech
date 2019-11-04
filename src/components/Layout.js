import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'emotion-theming'
import PropTypes from 'prop-types';
import { library as faLibrary } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import theme from '../theme'
import Helmet from './Helmet';

// Load font awesome brand icons
faLibrary.add(fas, fab)

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    font-family: ${theme.fonts.body};
    font-display: swap;
    font-display: fallback;
    letter-spacing: ${theme.text.main.letterSpacing};
  }
`;

const LayoutContainer = styled.div`
  background: white;
`;

const Layout = ({ id, children }) => (
  <LayoutContainer id={id}>
    <GlobalStyle />
    <ThemeProvider theme={ theme }>
      <Helmet />
      {children}
    </ThemeProvider>
  </LayoutContainer>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string
};

export default Layout;
