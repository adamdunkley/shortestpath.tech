// @flow

export default {
  colors: {
    text: '#0A0A0A',
    background: '#fff',
    primary: '#0A0A0A',
    muted: '#f6f6f6',
    gray: '#CCC',
  },
  fonts: {
    body: 'Source Sans Pro Light, sans-serif',
    heading: 'Source Sans Pro, sans-serif',
    monospace: '"Roboto Mono", monospace',
  },
  fontSizes: [
    10, 12, 14, 16, 20, 24, 34, 48, 60, 96
  ],
  fontWeights: {
    body: 200,
    heading: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.2,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // rebass variants
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
      letterSpacing: '1px',
      textAlign: ['left', 'center', 'center'],
    },
    subheading: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 4,
      paddingBottom: 2,
      letterSpacing: '0.5px',
      textAlign: ['left', 'center', 'center'],
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [ 6, 7 ],
      letterSpacing: '0.5px',
      textAlign: ['left', 'center', 'center'],
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    main: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 3,
      letterSpacing: '0.5px',
      textAlign: ['left', 'center', 'center'],
    }
  },
  variants: {
    link: {
      color: 'primary',
      textDecoration: 'none',
      fontFamily: 'heading',
      fontWeight: 'heading',
    },
    footer: {
      color: 'background',
      textDecoration: 'none',
      fontFamily: 'heading',
      fontWeight: 'heading',
      ':hover,:focus': {
        color: 'background',
      }
    },
  },
  buttons: {
    primary: {
      fontSize: 3,
      fontWeight: 'body',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default',
      cursor: 'pointer',
      outline: 'none',
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary',
    },
    smallOutline: {
      variant: 'buttons.outline',
      fontSize: 2,
      padding: 2
    }
  },
  forms: {
    input: {
      color: 'primary',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'gray',
    },
    textarea: {
      color: 'primary',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'gray',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
  },
};
