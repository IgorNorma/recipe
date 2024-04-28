import React, { ReactNode } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Seo, { SeoProp } from "../components/Seo/seo"

interface Prop {
  children: ReactNode
  background: string
  seo: SeoProp
}

function HomeLayout({ children, background, seo }: Prop) {
  return (
    <div style={{ background }}>
      <Seo {...seo} />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default HomeLayout
