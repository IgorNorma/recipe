import React from "react"
import "./style.scss"
import Logo from "../Logo"
import FBIcon from "../../assets/images/icons/facebook.png"
import IgIcon from "../../assets/images/icons/instagram.png"
import YtIcon from "../../assets/images/icons/youtube.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <Logo />
        <div>
          <p>BMA Compound, A. Bonifacio Ave, Marikina, 1803</p>
          <p>Metro Manila, Philippines</p>
        </div>
        <span className="copy-right">
          ⓒ Keifer Ramos, Front end Developer. All Right Reserve
        </span>
      </div>
      <div className="footer-links">
        <ul className="social-medias">
          <li>
            <img src={FBIcon} alt="fb icon" />
          </li>
          <li>
            <img src={IgIcon} alt="instagram icon" />
          </li>
          <li>
            <img src={YtIcon} alt="youtube icon" />
          </li>
        </ul>
        <ul>
          <li>Cookie Policy</li>
          <li>terms & Condition</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <span className="copy-right-end">
        ⓒ Keifer Ramos, Front end Developer. All Right Reserve
      </span>
    </footer>
  )
}

export default Footer
