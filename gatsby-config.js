/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require("path")

const config = require(`./src/utils/siteConfig`)

let ghostConfig

try {
  ghostConfig = require(`./.ghost`)
} catch (e) {
  ghostConfig = {
    production: {
      apiUrl: process.env.GHOST_API_URL,
      contentApiKey: process.env.GHOST_CONTENT_API_KEY,
    },
  }
} finally {
  const { apiUrl, contentApiKey } =
    process.env.NODE_ENV === `development`
      ? ghostConfig.development
      : ghostConfig.production

  if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
    throw new Error(
      `GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README.`
    ) // eslint-disable-line
  }
}

if (
  process.env.NODE_ENV === `production` &&
  config.siteUrl === `http://localhost:8000` &&
  !process.env.SITEURL
) {
  throw new Error(
    `siteUrl can't be localhost and needs to be configured in siteConfig. Check the README.`
  ) // eslint-disable-line
}

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Watchphile",
    description: "A port of the casper blog built for gatsby",
    siteUrl: "https://www.watchphile.co",
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": "AuthorYaml.name",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-ghost`,
      options:
        process.env.NODE_ENV === `development`
          ? ghostConfig.development
          : ghostConfig.production,
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 100,
        stripMetadata: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: path.join(__dirname, "src", "content"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `pages`),
        name: `pages`,
      },
    },
    // Setup for optimised images.
    // See https://www.gatsbyjs.org/packages/gatsby-image/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
        name: `images`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2000,
              quality: 100,
            },
          },
        ],
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://gatsby-casper.netlify.com",
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-emotion",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-ghost-images`,
      options: {
        // An array of node types and image fields per node
        // Image fields must contain a valid absolute path to the image to be downloaded
        lookup: [
          {
            type: `GhostPost`,
            imgTags: [`feature_image`],
          },
          {
            type: `GhostPage`,
            imgTags: [`feature_image`],
          },
          {
            type: `GhostSettings`,
            imgTags: [`cover_image`],
          },
        ],
        // Additional condition to exclude nodes
        // Takes precedence over lookup
        exclude: node => node.ghostId === undefined,
        // Additional information messages useful for debugging
        verbose: true,
        // Option to disable the module (default: false)
        disable: false,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge => ({
                ...edge.node.frontmatter,
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`,
                guid: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`,
                custom_elements: [{ "content:encoded": edge.node.html }],
              })),
            query: `
              {
                allMarkdownRemark(
                  filter: { frontmatter: { draft: { ne: true } } }
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Ghost's Blog",
            match: "^/blog/",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("postcss-color-function"),
          require("cssnano")(),
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-XXXX-Y",
        // Puts tracking script in the head instead of the body
        head: true,
        // IP anonymization for GDPR compliance
        anonymize: true,
        // Disable analytics for users with `Do Not Track` enabled
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**"],
        // Specifies what percentage of users should be tracked
        sampleRate: 100,
        // Determines how often site speed tracking beacons will be sent
        siteSpeedSampleRate: 10,
      },
    },
  ],
}
