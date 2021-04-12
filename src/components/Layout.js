import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
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
        <meta content="We are CodeGrain." property="og:title" />
        <meta content="CodeGrain" property="og:site_name" />
        <meta
          content="We strategically design beautiful brands, websites, and digital products that actually work."
          property="og:description"
        />
        <meta content="./img/logo-square.png" property="og:image" />
        <meta
          content="https://codegrain.netlify.com/index.html"
          property="og:url"
        />
      </Helmet>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link className="logo smooth-leave" to="/"></Link>
              <nav>
                <ul>
                  <li>
                    <Link className="smooth-leave" to="/about/">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="smooth-leave" to="/services/">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className="smooth-leave" to="/work/">
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link className="smooth-leave" to="/blog/">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="smooth-leave" to="/contact/">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <span className="nav-toggle">Menu</span>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>
      <footer className="mar-top-lg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-3 col-sm-12">
              <Link className="logo smooth-leave" to="/"></Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="footer-contacts">
                <div className="wrap">
                  <div className="address">
                    <p>
                      Pune
                      <br />
                      Maharashtra, IN
                    </p>
                  </div>
                  <a className="email" href="mailto:codegrain@gmail.com">
                    codegrain@gmail.com
                  </a>
                  <br />
                  <a className="phone" href="tel:+919022332201">
                    +91 902-233-2202
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12">
              <div className="social-links">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://instagram.com/thecodegrain"
                    >
                      ig
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/codegrain"
                    >
                      tw
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.behance.net/CodeGrain"
                    >
                      Bē
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.youtube.com/channel/UCPKsb4U7x_4Ws-RsKQThVAA/featured"
                    >
                      yt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <script src="../../static/js/plugins.min.js"></script>
      <script src="../../static/js/functions.js"></script>
    </>
  );
};

export default Layout;
