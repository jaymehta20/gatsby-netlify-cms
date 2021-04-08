import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../../components/Layout";

const Subodh = () => {
  return (
    <Layout>
      <div className="spacer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="project-intro mar-top-lg">
                <h1 className="project-title">Subodh MUN</h1>
                <p className="project-description">
                  Subodh MUN is also an academic simulation of United Nations
                  where the generation Z students deliberate upon global issues.
                </p>
                <ul className="project-services">
                  <li>Social Media Posts</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="mar-top-lg">
                <div className="project-image">
                  <StaticImage
                    src="../../../../static/img/works/subodh/image_1.png"
                    alt="Overview"
                    placeholder="blurred"
                  ></StaticImage>
                </div>
              </div>
            </div>
          </div>
          <div className="project-content mar-top-md mar-bot-md">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <p className="lead">
                  It was very interesting playing with colours. We contributed
                  in creating a visual identity for Subodh MUN by giving them a
                  particular Color Palette which easily made their brand
                  identify. We created them promotion designs for their
                  socials(instagram posts, posters, etc.). The attention seeking
                  designs resulted in their increasing responses. This made them
                  easy to gain global approach.
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
              src="../../../../static/img/works/subodh/image_2.png"
              alt="Work Showcase"
              placeholder="blurred"
            ></StaticImage>
          </div>
          <div className="slide">
            <StaticImage
              src="../../../../static/img/works/subodh/image_3.png"
              alt="Work Showcase"
              placeholder="blurred"
            ></StaticImage>
          </div>
        </div>
      </div>
      <div className="spacer">
        <div className="container">
          <div className="next-project">
            <div className="row">
              <div className="col-lg-6 col-md-8 offset-lg-3 offset-md-2">
                <p>Next Project</p>
                <h2>
                  <Link to="/work/vmb">Vision Money Bucket</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Subodh;
