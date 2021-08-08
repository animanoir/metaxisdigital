import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

const Header = ({ siteTitle, siteDescription, menuOpen, setMenuOpen }) => {
  const tesisPalabras = [
    "filosofía",
    "arte",
    "fantasmas",
    "meta",
    "tesis",
    "sol",
    "vida",
    "muerte",
    "ser",
    "meditaciones",
    "simbolismo",
    "surrealismo",
    "conciencia",
    "antimateria",
    "materia",
    "tú",
  ]
  const antitesisPalabras = [
    "computación",
    "psicología",
    "matemáticas",
    "antitesis",
    "antimateria",
    "máquinas",
    "taxis",
    "luna",
    "antimateria",
    "nada",
    "metamorfosis",
    "yo",
  ]
  const [scrollY, setScrollY] = useState(0)
  const [tesis, setTesis] = useState("filosofía")
  const [antitesis, setAntitesis] = useState("computación")

  function logit() {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit)
    }

    watchScroll()

    return () => {
      window.removeEventListener("scroll", logit)
    }
  })

  useEffect(() => {
    let selectedTesis =
      tesisPalabras[Math.floor(Math.random() * tesisPalabras.length)]
    let selectedAntitesis =
      antitesisPalabras[Math.floor(Math.random() * antitesisPalabras.length)]
    return setTesis(selectedTesis), setAntitesis(selectedAntitesis)
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
            {siteTitle} |{" "}
            <span style={{ fontWeight: "400" }}>
              {tesis} y {antitesis}
            </span>
          </Link>
        </button>

        <nav id="nav">
          <ul>
            <li>
              <Link to="/conceptos" id="all-topics-link">
                <span className="header-links">
                  <b>.conceptos</b>
                </span>
              </Link>
              <Link to="/acerca">
                <span className="header-links">
                  <b>.acerca</b>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `metaxis.digital`,
  siteDescription: `filosofía y computación`,
}

export default Header
