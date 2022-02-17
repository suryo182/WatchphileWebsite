import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Navigation } from "."
import config from "../../utils/siteConfig"
import twitterLogo from "../../images/icons/twitter.svg"

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
  const site = data.allGhostSettings.edges[0].node
  const twitterUrl = site.twitter
    ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
    : null
  const facebookUrl = site.facebook
    ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
    : null

  return (
    <>
      <Helmet>
        <html lang={site.lang} />
        <style type="text/css">{`${site.codeinjection_styles}`}</style>
        <body className={bodyClass} />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          {/* The main header section on top of the screen */}
          <header
            className="object-cover bg-cover h-76 bg-center"
            style={{
              ...(site.cover_image && {
                backgroundImage: `url(${site.cover_image})`,
              }),
            }}
          >
            <div className="container mx-auto">
              <nav className="flex justify-between py-2">
                <div className="flex gap-x-3">
                  {/* The navigation items as setup in Ghost */}
                  <Navigation
                    data={site.navigation}
                    navClass="text-white opacity-80 hover:opacity-100"
                  />
                </div>
                {/* <div >
                                    <Link  to="/about">About</Link>
                                </div> */}
                <div>
                  <div>
                    {/* <Link to="/">
                                        {site.logo ?
                                            <img className="site-logo" src={site.logo} alt={site.title} />
                                            : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                                        }
                                    </Link> */}
                  </div>
                  <div className="flex gap-x-3 items-center">
                    {site.twitter && (
                      <a
                        href={twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={twitterLogo}
                          alt="Twitter"
                          className="h-5.5 w-5.5 opacity-80"
                        />
                      </a>
                    )}
                    {site.facebook && (
                      <a
                        href={facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="/images/icons/facebook.svg" alt="Facebook" />
                      </a>
                    )}
                    <button className="text-3.75 text-gray-800 bg-white py-2 px-4 rounded-7.5 leading-none">
                      Subscribe
                    </button>
                  </div>
                </div>
              </nav>

              {isHome ? (
                <div className="text-center py-16 px-2">
                  <h1 className="text-white font-bold text-5xl mb-1">
                    {site.title}
                  </h1>
                  <p className="text-white text-6.25 leading opacity-80">
                    {site.description}
                  </p>
                </div>
              ) : null}
            </div>
          </header>

          <main>
            {/* All the main content gets inserted here, index.js, post.js */}
            {children}
          </main>
        </div>

        <div className="mt-10">
          {/* The footer at the very bottom of the screen */}
          <footer className="bg-black pt-10 pb-35">
            <div className="container mx-auto">
              <div className="flex justify-between">
                <div>
                  <Link to="/" className="text-white mr-1 text-xs">
                    {site.title}
                  </Link>
                  <span className="text-secondary text-xs">© 2022</span>
                </div>
                <div className="flex gap-x-3">
                  <Navigation
                    data={site.navigation}
                    navClass="text-white opacity-80 hover:opacity-100 text-xs"
                  />
                </div>
                <a
                  href="https://ghost.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white opacity-80 hover:opacity-100 text-xs"
                >
                  Powered By Ghost
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyClass: PropTypes.string,
  isHome: PropTypes.bool,
  data: PropTypes.shape({
    file: PropTypes.object,
    allGhostSettings: PropTypes.object.isRequired,
  }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
  <StaticQuery
    query={graphql`
      query GhostSettings {
        allGhostSettings {
          edges {
            node {
              ...GhostSettingsFields
            }
          }
        }
      }
    `}
    render={data => <DefaultLayout data={data} {...props} />}
  />
)

export default DefaultLayoutSettingsQuery
