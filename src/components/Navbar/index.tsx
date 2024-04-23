import React, { useEffect, useState } from "react"
import Logo from "../Logo"
import "./style.scss"
import { MenuOutlined } from "@ant-design/icons"
import { Link } from "gatsby"
import FBIcon from "../../assets/images/icons/facebook.png"
import IgIcon from "../../assets/images/icons/instagram.png"
import YtIcon from "../../assets/images/icons/youtube.png"

function Navbar() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <nav className="navbar">
      <Logo />
      <MenuOutlined rev className="toggle-btn" onClick={() => setOpen(true)} />
      <ul className="nav-links">
        <li>
          <Link to="/blogs">BLOGS</Link>
        </li>
        <li>
          <Link to="/recipes">RECIPES</Link>
        </li>
        <li>
          <Link to="/about-us">ABOUT US</Link>
        </li>
        <li>
          <button className="global-btn">contact us</button>
        </li>
      </ul>
      <div className={`side-nav ${open ? "open-nav" : ""}`}>
        <header>
          <Logo />
          <MenuOutlined
            rev
            className="toggle-btn"
            onClick={() => setOpen(false)}
          />
        </header>
        <ul className="side-nav-links">
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
        <button className="global-btn">contact us</button>
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
      </div>
    </nav>
  )
}

export default Navbar
