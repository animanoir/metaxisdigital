import React from "react"
import {
  TiSocialTwitter,
  TiSocialInstagram
} from "react-icons/ti"

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
                <TiSocialTwitter className="footer-social-icon" />
              </span>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/fantasma.rip/"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="fb-icon">
                <TiSocialInstagram className="footer-social-icon" />
              </span>
            </a>
          </div>
        </div>
        <div><a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style={{borderWidth: '0px'}} src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br /></div>
        <div><p>Una iniciativa de fantasma</p></div>
      </div>
    </footer>
  )
}
export default Footer
