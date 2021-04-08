import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../../components/Layout";

const Vmb = () => {
  return (
    <Layout>
      <div className="spacer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="project-intro mar-top-lg">
                <h1 className="project-title">Vision Money Bucket</h1>
                <p className="project-description">
                  VMB is a finance consultation firm which gives advisory
                  services to their clients helping them grow economically and
                  being financially independent.
                </p>
                <ul className="project-services">
                  <li>Website</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="mar-top-lg">
                <div className="project-image">
                  <StaticImage
                    src="../../../../static/img/works/vmb/image_1.png"
                    alt="Work Showcase"
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
                  It was even more engaging with having fun while helping to
                  complete the Vision of Vision Money Bucket. We created a
                  digital identity for them in the form of their official
                  website. This helped them to reach their clients and even
                  clients reach them and gain the online crowd. The growth in
                  their business through digital approach made our vision
                  successfull there.
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
              src="../../../../static/img/works/vmb/Fonts VMB.png"
              alt="Fonts"
              placeholder="blurred"
            />
          </div>
          <div className="slide">
            <StaticImage
              src="../../../../static/img/works/vmb/Colors VMB.png"
              alt="Colors"
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
                    src="../../../../static/img/works/vmb/image_2.png"
                    alt="Work Showcase"
                    placeholder="blurred"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="project-image">
                  <StaticImage
                    src="../../../../static/img/works/vmb/image_3.png"
                    alt="Work Showcase"
                    placeholder="blurred"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="project-image">
                  <StaticImage
                    src="../../../../static/img/works/vmb/image_4.png"
                    alt="Work Showcase"
                    placeholder="blurred"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="project-image">
                  <StaticImage
                    src="../../../../static/img/works/vmb/image_5.png"
                    alt="Work Showcase"
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
                  <Link to="/work/bvj/">BVJ MUN</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Vmb;
