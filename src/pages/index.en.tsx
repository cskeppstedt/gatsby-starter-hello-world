import React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";

const IndexPageEn: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location} lang="en">
      Hello world
    </Layout>
  );
};

export default IndexPageEn;
