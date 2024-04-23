import React from "react"
import LogoIcon from "../../assets/images/icons/burger.png"
import { Link } from "gatsby"
import "./style.scss"

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={LogoIcon} alt="" />
      <h2>Recipes & Blogs</h2>
    </Link>
  )
}

export default Logo
