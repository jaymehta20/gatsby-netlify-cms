import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../../components/Layout";

const Bvj = () => {
  return (
    <Layout>
      <div className="spacer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="project-intro mar-top-lg">
                <h1 className="project-title">BVJMUN</h1>
                <p className="project-description">
                  Bhavan's Vidyashram Jaipur Model United Nations is a
                  conference of students where discussions and heated debates on
                  global issues take place.
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
                    src="../../../../static/img/works/bvj/1.png"
                    alt="BVJ MUN"
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
                  Building and designing of their website made their
                  participants connect and communicate with them easily. Their
                  participants were quite satisfied with the responsive nature
                  of the website. The layout and design gained more attention
                  making it look professional and user-friendly at the same
                  time.
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
              src="../../../../static/img/works/bvj/Fonts.png"
              alt="Work Showcase"
              placeholder="blurred"
            />
          </div>
          <div className="slide">
            <StaticImage
              src="../../../../static/img/works/bvj/Colors.png"
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
                    src="../../../../static/img/works/bvj/5.png"
                    alt="Leadersh ip Summit"
                    placeholder="blurred"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="project-image">
                  <StaticImage
                    src="../../../../static/img/works/bvj/2.png"
                    alt="Committe"
                    placeholder="blurred"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="project-image">
                  <StaticImage
                    src="../../../../static/img/works/bvj/3.png"
                    alt="Itinerary"
                    placeholder="blurred"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="project-image">
                  <StaticImage
                    src="../../../../static/img/works/bvj/4.png"
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
                  <Link to="/work/jyc">Jaipur Youth Conclave</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Bvj;
