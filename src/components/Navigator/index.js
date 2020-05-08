import React from "react"
import { Link } from "gatsby"
import { defaultLanguage } from "../../config/languages"
import styles from "./Navigator.module.scss"

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
  {
    path: "/nowhere",
    label: { en: "Nowhere", sv: "Ingenstans" },
  },
]

export default ({ lang }) => (
  <ul className={styles.list}>
    {links.map(({ path, label }) => (
      <li>
        <Link className={styles.link} to={toWithLang(lang, path)}>
          {label[lang]}
        </Link>
      </li>
    ))}
  </ul>
)
