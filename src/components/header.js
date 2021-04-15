import { Link, useStaticQuery, graphql, navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { IoIosSearch } from "react-icons/io"

const Header = ({ siteTitle, siteDescription, menuOpen, setMenuOpen }) => {
  const data = useStaticQuery(graphql`
    {
      allTopicsJson {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `)

  return (
    <header id="header">
      <div className="container">
        <button
          id="site-logo-wrapper"
          onClick={() => {
            if (menuOpen) {
              setMenuOpen(false)
            }
          }}
        >
          <Link
            to="/"
            id="site-logo"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle} | <span style={{fontWeight: '400'}}>{siteDescription}</span>
          </Link>
        </button>

        <nav id="nav">
          <ul>
            <li>
            <Link to="/topics" id="all-topics-link">
              <span className='header-links'>Conceptos</span>
             </Link>
              <Link to="/acerca">
              <span className='header-links'>Acerca</span>
              </Link>
            </li>
          </ul>
          <div id="search-box">
            <form
              onSubmit={e => {
                e.preventDefault()
                navigate(`/?s=${e.target.query.value.toLowerCase()}`)
              }}
            >
              <input type="text" id="query" aria-label="Search" />
            </form>
            <IoIosSearch />
          </div>
          {menuOpen ? (
            <button className="menu-button" onClick={() => setMenuOpen(false)}>
              <MdClose />
            </button>
          ) : (
            <button className="menu-button" onClick={() => setMenuOpen(true)}>
              <FiMenu />
            </button>
          )}
        </nav>
      </div>
      {menuOpen && (
        <div id="menu">
          <ul>
            {data.allTopicsJson.edges.map(({ node }) => (
              <li key={node.slug}>
                <Link to={`/${node.slug}`}>{node.name}</Link>
              </li>
            ))}
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `metaxis.digital`,
  siteDescription: `filosofía y computación`
}

export default Header
