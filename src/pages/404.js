import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

import "../styles/style.css";
import "../styles/bootstrap-grid.min.css";
import "../styles/animsition.min.css";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="wrap">
        <div className="container">
          <div className="mar-top-lg">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="mar-bot-xs">
                  <div className="page-content-image">
                    <img src="../img/error404.jpg" alt="Error" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 col-md-10">
                <div className="page-content">
                  <h1>404!</h1>
                  <p className="lead">Seems like you are lost.</p>
                  <h2>
                    Lets get you <Link href="https://codegra.in/">Home</Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
