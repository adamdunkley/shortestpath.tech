/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID, CONTENTFUL_HOST, GA_ID } = process.env;

module.exports = {
  siteMetadata: {
    siteUrl: `https://shortestpath.tech`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Spectral SC Medium', 'Source Sans Pro:200,400', 'Cabin', 'Open Sans'],
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: SPACE_ID,
        accessToken: ACCESS_TOKEN,
        host: CONTENTFUL_HOST || 'cdn.contentful.com',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: GA_ID,
      },
    },
  ]
}
