import React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";

const IndexPageSv: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location} lang="sv">
      Hej hej
    </Layout>
  );
};

export default IndexPageSv;
