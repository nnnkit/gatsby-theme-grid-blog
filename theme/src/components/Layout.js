import React from "react";
import Helmet from "react-helmet";
import metadata from "../hooks/siteMetadata";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const { title, description } = metadata();
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
