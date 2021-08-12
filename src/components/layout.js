import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./styles.css"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="container">
        <main>{children}</main>
      </div>
      <div className="menu-footer">
        <Link to="/conceptos">
          <span className="header-links">
            <b>.conceptos</b>
          </span>
        </Link>
        <Link to="/acerca">
          <span className="header-links">
            <b>.acerca</b>
          </span>
        </Link>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
