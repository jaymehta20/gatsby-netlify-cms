import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title }) => {
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={title}>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1"
      />
      <meta name="theme-color" content="#8cc972" />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      {/* <title>CodeGrain</title> */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        content="We strategically design beautiful brands, websites, and digital products that actually work."
        name="description"
      />
      <meta content="We are Codegrain." property="og:title" />
      <meta content="Codegrain" property="og:site_name" />
      <meta
        content="We strategically design beautiful brands, websites, and digital products that actually work."
        property="og:description"
      />
      <meta content="../../static/img/logo-square.png" property="og:image" />
      <meta content="https://codegra.in/index.html" property="og:url" />
    </Helmet>
  );
};
