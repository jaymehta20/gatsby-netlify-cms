import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../../components/Layout";

const Bob = () => {
  return (
    <Layout>
      <div className="spacer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="project-intro mar-top-lg">
                <h1 className="project-title">Battle of Bands</h1>
                <p className="project-description">
                  As the name says, Battle of Bands was a Rock Band Competition
                  held at one of the biggest events - Sangli Festival in western
                  Maharashtra.
                </p>
                <ul className="project-services">
                  <li>Branding - Social Media Management</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="mar-top-lg">
                <div className="project-image">
                  <StaticImage
                    src="../../../../static/img/works/bob/image_1.png"
                    alt="Work Showcase"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="project-content mar-top-md mar-bot-md">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <p className="lead">
                  We helped the organizers in branding. Right from logo
                  designing to designing of promo material and even handling
                  their social media. It made the organizers much easier to
                  convey their message to the participants and the public.
                </p>
              </div>
            </div>
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
                    src="../../../../static/img/works/bob/image_1.png"
                    alt="Work Showcase"
                    placeholder="blurred"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="project-image">
                  <StaticImage
                    src="../../../../static/img/works/bob/image_2.png"
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
                    src="../../../../static/img/works/bob/image_3.png"
                    alt="Work Showcase"
                    placeholder="blurred"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="project-image">
                  <StaticImage
                    src="../../../../static/img/works/bob/image_4.png"
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
                  <Link to="/work/subodh/">Subodh MUN</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Bob;
