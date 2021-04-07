import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

import "../styles/style.css";
import "../styles/bootstrap-grid.min.css";
import "../styles/animsition.min.css";

const Home = () => {
  return (
    <Layout>
      <div className="spacer">
        <div className="intro">
          <div className="intro-image">
            <StaticImage
              src="../../static/img/homepage_intro.png"
              alt="Digitize Your Brand"
              placeholder="blurred"
            />
          </div>
          <div className="intro-text">
            <h1>
              Digitize
              <br />
              Your Brand
            </h1>
            <h3>Web Development | Web Designing | Branding</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="works columns">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="section-title">
                  <p>
                    We take care of your visual appearance with creativity,
                    foresight and a lot of care.
                    <Link to="/contact/">Let's talk</Link> or
                    <Link to="/services/">check more.</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="works-grid">
                  <div className="works-gutter"></div>
                  <a
                    className="work-item"
                    href="../work/jyc.html"
                    data-groups='["branding"]'
                  >
                    <div className="work-image">
                      <div className="icon-arrow"></div>
                      <img src="img/works/work_1.jpg" alt="JYC img" />
                    </div>
                    <div className="work-description">
                      <h3 className="work-title">Jaipur Youth Conclave</h3>
                      <ul className="work-services">
                        <li>Website</li>
                      </ul>
                    </div>
                  </a>
                  <a
                    className="work-item"
                    href="./work/bob.html"
                    data-groups='["branding"]'
                  >
                    <div className="work-image">
                      <div className="icon-arrow"></div>
                      <img src="img/works/work_2.jpg" alt="BOB img" />
                    </div>
                    <div className="work-description">
                      <h3 className="work-title">Battle Of Bands</h3>
                      <ul className="work-services">
                        <li>Branding</li>
                      </ul>
                    </div>
                  </a>
                  <a
                    className="work-item"
                    href="./work/subodh.html"
                    data-groups='["typography"]'
                  >
                    <div className="work-image">
                      <div className="icon-arrow"></div>
                      <img src="img/works/work_3.jpg" alt="Subodh img" />
                    </div>
                    <div className="work-description">
                      <h3 className="work-title">Subodh Mun</h3>
                      <ul className="work-services">
                        <li>Poster Design</li>
                      </ul>
                    </div>
                  </a>
                  <a
                    className="work-item"
                    href="./work/vmb.html"
                    data-groups='["art direction"]'
                  >
                    <div className="work-image">
                      <div className="icon-arrow"></div>
                      <img src="img/works/work_4.jpg" alt="VMB img" />
                    </div>
                    <div className="work-description">
                      <h3 className="work-title">Vision Money Bucket</h3>
                      <ul className="work-services">
                        <li>Website</li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="load-more">
                  <h2>
                    <a href="work.html">More</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
