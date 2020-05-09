import React from "react";
import Header from "../Header";
import styles from "./Layout.module.scss";
import { AvailableLanguage } from "../../config/languages";

interface LayoutProps {
  lang: AvailableLanguage;
  location: Location;
}

const Layout: React.FC<LayoutProps> = ({ location, children, lang }) => {
  return (
    <div className={styles.layout}>
      <Header location={location} lang={lang} />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
