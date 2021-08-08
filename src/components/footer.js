import React from "react"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-social">
          <div className="footer-social-icons">
            <a
              target="_blank"
              href="https://twitter.com/metaxisdigital"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="tw-icon">
                .tw
              </span>
            </a>
          </div>
        </div>
        <div>
          <a
            rel="license"
            href="https://creativecommons.org/licenses/by-sa/4.0/deed.es"
          >
            <img
              className="licencia"
              alt="Creative Commons License"
              style={{ borderWidth: "0px" }}
              src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
            />
          </a>
          <br />
        </div>
        <div className="footer-fantasma">
          <p>
            Una iniciativa de{" "}
            <a class="link-fantasma" href="https://fantasma.rip/">
              fantasma
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
