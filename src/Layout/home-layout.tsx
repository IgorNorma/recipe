import React, { ReactNode } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

interface Prop {
  children: ReactNode
  background: string
}

function HomeLayout({ children, background }: Prop) {
  return (
    <div style={{ background }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default HomeLayout
