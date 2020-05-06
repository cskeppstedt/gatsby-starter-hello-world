import React from "react"
import { Link } from "gatsby"
import { defaultLanguage, otherLanguage } from "../../config/languages"

const labels = {
  en: "english",
  sv: "svenska",
}

function LanguageSelector({ lang, location }) {
  if (lang === defaultLanguage) {
    return (
      <Link to={`/${otherLanguage}/${location.pathname}`}>
        {labels[otherLanguage]}
      </Link>
    )
  }
  return (
    <Link to={location.pathname.replace("/" + lang + "/", "/")}>
      {labels[defaultLanguage]}
    </Link>
  )
}

export default LanguageSelector
