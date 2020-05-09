import React from "react";
import { Link } from "gatsby";
import { defaultLanguage, AvailableLanguage } from "../../config/languages";
import styles from "./Navigator.module.scss";

interface NavigatorProps {
  lang: AvailableLanguage;
  location: Location;
}

const toWithLang = (lang: AvailableLanguage, to: string) =>
  lang === defaultLanguage ? `${to}` : `/${lang}${to}`;

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
];

const Navigator: React.FC<NavigatorProps> = ({ lang }) => (
  <ul className={styles.list}>
    {links.map(({ path, label }) => (
      <li>
        <Link className={styles.link} to={toWithLang(lang, path)}>
          {label[lang]}
        </Link>
      </li>
    ))}
  </ul>
);

export default Navigator;
