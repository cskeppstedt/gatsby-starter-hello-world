import React from "react"
import Header from "../Header"

function Layout({ location, children, lang }) {
  return (
    <div>
      <Header location={location} lang={lang} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
