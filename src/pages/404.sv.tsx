import React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";

const PageNotFoundSv: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location} lang="sv">
      Sidan kunde inte hittas
    </Layout>
  );
};

export default PageNotFoundSv;
