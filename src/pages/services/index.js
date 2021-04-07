import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

import "../../styles/style.css";
import "../../styles/bootstrap-grid.min.css";
import "../../styles/animsition.min.css";

const Services = () => {
  return (
    <Layout>
      <div className="spacer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <div className="page-intro mar-top-lg">
                <h1 className="page-title">What we do.</h1>
                <p>
                  We make your products/services universally accessible using
                  latest technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="mar-top-md">
                <div className="page-content-image">
                  <img src="./img/studio/image_1.jpg" alt="Services" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="page-content mar-top-lg">
            <div className="row">
              <div className="col-lg-4 col-md-10">
                <h2>Our Role</h2>
              </div>
              <div className="col-lg-7 offset-lg-1 col-md-10">
                <p className="lead">
                  We are here to make your product/service reach your target
                  audience through a <strong>digital</strong>
                  platform. We as problem solvers do research, analysis,
                  planning and documentation on your project requisites and
                  execute it ensuring excellent results.
                </p>
                <p className="lead">
                  We helped our clients multiply their customers by digitizing
                  their brand. Having strong
                  <strong>online</strong>
                  presence creates a positive impression on your potential
                  clients.
                </p>
              </div>
            </div>
          </div>
          <div className="page-content mar-top-lg">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="studio-services">
                  <h4>Branding</h4>
                  <ul>
                    <li>Brand Guidelines</li>
                    <li>Copywriting</li>
                    <li>Content Strategy</li>
                    <li>Content Writing</li>
                    <li>Lettering</li>
                    <li>Photography</li>
                    <li>Services Branding</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="studio-services">
                  <h4>Website</h4>
                  <ul>
                    <li>Blog</li>
                    <li>Business Website</li>
                    <li>Portfolio</li>
                    <li>Product Website</li>
                    <li>Landing Pages</li>
                    <li>Entertainment Websites</li>
                    <li>Brochure Websites</li>
                    <li>Non-Profit Websites</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="studio-services">
                  <h4>UI/UX</h4>
                  <ul>
                    <li>App Design </li>
                    <li>iOS + Android Applications</li>
                    <li>Interactive Prototyping</li>
                    <li>Mockups</li>
                    <li>Prototyping</li>
                    <li>Web Design</li>
                    <li>Wireframes </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="studio-services">
                  <h4>Graphic Design</h4>
                  <ul>
                    <li>Business Cards</li>
                    <li>Logos</li>
                    <li>Poster Design</li>
                    <li>Print Design</li>
                    <li>Social Media Posts</li>
                    <li>Visual Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mar-top-lg">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="mar-bot-xs">
                  <div className="page-content-image">
                    <img src="./img/studio/image_2.jpg" alt="Studio img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 col-md-10">
                <div className="page-content">
                  <h2>
                    Grow your value <br /> with us.
                  </h2>
                  <p className="lead">
                    Come
                    <a href="./contact.html"> let's have a coffee.</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
