/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID } = process.env;

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Spectral SC Medium', 'Source Sans Pro', 'Source Sans Pro Light', 'Cabin', 'Open Sans'],
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: SPACE_ID,
        accessToken: ACCESS_TOKEN,
      },
    },
  ]
}
