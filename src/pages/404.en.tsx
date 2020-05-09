import React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";

const PageNotFoundEn: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location} lang="en">
      Page not found
    </Layout>
  );
};

export default PageNotFoundEn;
