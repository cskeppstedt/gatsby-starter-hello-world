import React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";

const AboutPageSv: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location} lang="sv">
      Om
    </Layout>
  );
};

export default AboutPageSv;
