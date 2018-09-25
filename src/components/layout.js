import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { TypographyStyle, GoogleFont } from 'react-typography';
import typography from '../utils/typography';
import Header from './header';
import '../styles/global.css';
import '../styles/layout.css';
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className='site'>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          <html lang="en" />
        </Helmet>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        <Header />
        <main>
          {children}
        </main>
        <script dangerouslySetInnerHTML={{
          __html: `if (window.netlifyIdentity) {
                  window.netlifyIdentity.on("init", user => {
                    if (!user) {
                      window.netlifyIdentity.on("login", () => {
                        document.location.href = "/admin/";
                      });
                    }
                  });
                }`
          }}></script>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
