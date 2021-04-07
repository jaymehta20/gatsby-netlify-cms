import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "../../../styles/style.css";
import "../../../styles/bootstrap-grid.min.css";
import "../../../styles/animsition.min.css";
import Layout from "../../../components/Layout";

const JYC = () => {
  return (
    <Layout>
      <div className="spacer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="project-intro mar-top-lg">
                <h1 className="project-title">
                  Jaipur <br />
                  Youth Conclave
                </h1>
                <p className="project-description">
                  Jaipur Youth Conclave is an academic simulation of United
                  Nations where students of generation Z get to deliberate upon
                  issues of global importance.
                </p>
                <ul className="project-services">
                  <li>Website</li>
                  <li>Design</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="mar-top-lg">
                <div className="project-image">
                  <StaticImage
                    src="../../../../static/img/works/JYC/1.png"
                    alt="Jaipur Youth Conclave"
                    placeholder="blurred"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="project-content mar-top-md mar-bot-md">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <p className="lead">
                  We helped JYC to be easily accessible to their audience by
                  creating a user-friendly website. JYC is an academic
                  simulation of the United Nations where generation Z students
                  deliberate upon global issues. And exactly here, we helped
                  them to make their reach global which made their participants
                  easy to identify and approach. The fast responsive design of
                  the website even made the things done quickly without making
                  wait. Creating their global identity resulted in getting them
                  more impressive, effective, and productive results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-slider">
        <div className="navigation">
          <div className="prev-slide"></div>
          <div className="next-slide"></div>
        </div>
        <div className="owl-carousel">
          <div className="slide">
            <StaticImage
              src="../../../../static/img/works/JYC/Fonts.png"
              alt="Work Showcase"
              placeholder="blurred"
            />
          </div>
          <div className="slide">
            <StaticImage
              src="../../../../static/img/works/JYC/Colors.png"
              alt="Work Showcase"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>
      <div className="spacer">
        <div className="container">
          <div className="mar-top-lg">
            <div className="row">
              <div className="col-md-6">
                <div className="project-image">
                  <StaticImage
                    src="../../../../static/img/works/JYC/2.png"
                    alt="Leadership Summit"
                    placeholder="blurred"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="project-image">
                  <StaticImage
                    src="../../../../static/img/works/JYC/3.png"
                    alt="Committees"
                    placeholder="blurred"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="project-image">
                  <StaticImage
                    src="../../../../static/img/works/JYC/4.png"
                    alt="Itinerary"
                    placeholder="blurred"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="project-image">
                  <StaticImage
                    src="../../../../static/img/works/JYC/5.png"
                    alt="Map"
                    placeholder="blurred"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="next-project">
            <div className="row">
              <div className="col-lg-6 col-md-8 offset-lg-3 offset-md-2">
                <p>Next Project</p>
                <h2>
                  <Link to="/work/bob/">Battle of Bands</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JYC;
