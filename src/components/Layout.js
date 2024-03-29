import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'emotion-theming'
import PropTypes from 'prop-types';
import theme from '../theme'
import Helmet from './Helmet';

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

  button[disabled] {
    opacity: ${theme.buttons.disabled.opacity};
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
