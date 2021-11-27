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
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
  {resolve: `gatsby-plugin-sitemap`},
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      icon: `src/images/favicon_big.png`,
      name: "Watchphile",
      short_name: "Watchphile",
    }
  }
],
}
