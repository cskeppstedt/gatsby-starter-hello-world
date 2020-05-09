import React from "react";
import { Link } from "gatsby";
import {
  defaultLanguage,
  otherLanguage,
  AvailableLanguage,
} from "../../config/languages";

interface LanguageSelectorProps {
  lang: AvailableLanguage;
  location: Location;
}

const labels = {
  en: "english",
  sv: "svenska",
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  lang,
  location,
}) => {
  if (lang === defaultLanguage) {
    return (
      <Link to={`/${otherLanguage}/${location.pathname}`}>
        {labels[otherLanguage]}
      </Link>
    );
  }
  return (
    <Link to={location.pathname.replace("/" + lang + "/", "/")}>
      {labels[defaultLanguage]}
    </Link>
  );
};

export default LanguageSelector;
