import React, { ReactNode } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import "./styles.scss"
import Seo, { SeoProp } from "../components/Seo/seo"

interface Prop {
  children: ReactNode
  seo: SeoProp
  background?: string
}

function MainLayout({ children, seo, background }: Prop) {
  return (
    <div className="main-layout" style={{ background }}>
      <Seo {...seo} />
      <Navbar />
      <div className="main-content">
        {children}
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
