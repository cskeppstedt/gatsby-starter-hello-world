import React from "react";
import { PageProps } from "gatsby";
import LanguageSelector from "../LanguageSelector";
import Navigator from "../Navigator";
import { AvailableLanguage } from "../../config/languages";

interface HeaderProps {
  lang: AvailableLanguage;
  location: Location;
}

const Header: React.FC<HeaderProps> = ({ lang, location }) => {
  return (
    <header>
      <LanguageSelector location={location} lang={lang} />
      <Navigator location={location} lang={lang} />
    </header>
  );
};

export default Header;
