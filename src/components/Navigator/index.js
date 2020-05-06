import React from "react"
import { Link } from "gatsby"
import { defaultLanguage } from "../../config/languages"

const toWithLang = (lang, to) =>
  lang === defaultLanguage ? `${to}` : `/${lang}${to}`

const links = [
  {
    path: "/",
    label: { en: "Home", sv: "Hem" },
  },
  {
    path: "/about",
    label: { en: "About", sv: "Om" },
  },
]

export default ({ lang }) => (
  <ul>
    {links.map(({ path, label }) => (
      <li>
        <Link to={toWithLang(lang, path)}>{label[lang]}</Link>
      </li>
    ))}
  </ul>
)
