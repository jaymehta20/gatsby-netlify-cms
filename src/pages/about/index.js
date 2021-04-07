import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";

import "../../styles/style.css";
import "../../styles/bootstrap-grid.min.css";
import "../../styles/animsition.min.css";

const About = () => {
  return (
    <Layout>
      <div className="spacer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <div className="page-intro mar-top-lg">
                <h1 className="page-title">About Us</h1>
                <p>We take seeds and grow jungles!!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="mar-top-lg">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="mar-bot-xs">
                  <div className="page-content-image">
                    <img src="./img/studio/image_2.jpg" alt="About" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 col-md-10">
                <div className="page-content">
                  <h2>We are</h2>
                  <p className="lead">
                    An independent agency which turn your ideas into Digital
                    Products/Services. Since the beginning, our mission has been
                    to do great work and to have a great time doing it. We as
                    problem solvers do research, analysis, planning, and
                    documentation on your project requisites and execute it
                    ensuring excellent results.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="page-content mar-top-lg">
            <div className="row">
              <div className="col-lg-4 col-md-10">
                <h2>Working on ideas</h2>
              </div>
              <div className="col-lg-7 offset-lg-1 col-md-10">
                <p className="lead">
                  We transform your ideas into working solutions. Our
                  fundamental principle is to help our clients’ wishes come
                  true. Our work help startups to solve important problems and
                  grow up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
