import React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";

const AboutPageEn: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location} lang="en">
      About
    </Layout>
  );
};

export default AboutPageEn;
