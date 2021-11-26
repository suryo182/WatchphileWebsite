/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Watchphile',
    siteUrl: 'https://www.watchphile.co',
  },
  plugins: [`gatsby-plugin-postcss`,{resolve: `gatsby-plugin-sitemap`}
],
}
