import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const Links = () => {
  return (
    <Layout>
      <div className="spacer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <div className="page-intro mar-top-lg">
                <h1 className="page-title">Links</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mar-top-lg">
          <h3>Shared Resources </h3>
          <div className="links">
            <div className="menu-links-page-menu-container">
              <ul id="menu-links-page-menu" className="menu">
                <li>
                  <Link to="/blog/">10 key takeaways from show your work</Link>
                </li>
                <li>
                  <Link to="/blog/">
                    Open Source Apps for Windows, We use at Codegrain
                  </Link>
                </li>
                <li>
                  <Link to="/blog/">
                    Open Source Apps for Mac OS, We use at Codegrain
                  </Link>
                </li>
                <li>
                  <Link to="/blog/">
                    Master frost gradient, Create frost gradients with ease.
                  </Link>
                </li>
                <li>
                  <Link to="/blog/">
                    Save your eyes from eyestrain, Best fonts for your terminal.
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <h3>
            <Link to="/blog/">More</Link>
          </h3>
        </div>
      </div>
    </Layout>
  );
};

export default Links;
