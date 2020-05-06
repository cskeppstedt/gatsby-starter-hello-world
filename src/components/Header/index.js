import React from "react"
import LanguageSelector from "../LanguageSelector"
import Navigator from "../Navigator"

function Header({ lang, location }) {
  return (
    <header>
      <LanguageSelector location={location} lang={lang} />;
      <Navigator lang={lang} />
    </header>
  )
}

export default Header
