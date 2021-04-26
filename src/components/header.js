import { Link, useStaticQuery, graphql, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { IoIosSearch } from "react-icons/io"


Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

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

  const tesisPalabras = [
    'filosofía',
    'arte',
    'fantasmas',
    'tesis',
    'sol',
    'vida',
    'muerte',
    'ser',
    'meditaciones',
    'simbolismo',
    'surrealismo',
    'conciencia',
    'antimateria'
  ]
  const antitesisPalabras = [
    'computación',
    'psicología',
    'matemáticas',
    'antitesis',
    'luna',
    'antimateria',
    'nada',
    'metamorfosis'
  ]
  const [scrollY, setScrollY] = useState(0)
  const [tesis, setTesis] = useState('filosofía')
  const [antitesis, setAntitesis] = useState('computación')


  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', logit)
    }

    watchScroll()

    return () => {
      window.removeEventListener('scroll', logit)
    }
  })

  useEffect(() => {
    let selectedTesis = tesisPalabras[Math.floor(Math.random() * tesisPalabras.length)]
    let selectedAntitesis = antitesisPalabras[Math.floor(Math.random() * antitesisPalabras.length)]
    return (
      setTesis(selectedTesis),
      setAntitesis(selectedAntitesis)

    )
  }, [scrollY])

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
            {siteTitle} | <span style={{fontWeight: '400'}}>{tesis} y {antitesis}</span>
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
