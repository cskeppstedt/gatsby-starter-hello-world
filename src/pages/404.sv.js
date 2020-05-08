import React from "react";
import Layout from "../components/Layout";

function PageNotFoundSv({ location }) {
  return (
    <Layout location={location} lang="sv">
      Sidan kunde inte hittas
    </Layout>
  );
}

export default PageNotFoundSv;
