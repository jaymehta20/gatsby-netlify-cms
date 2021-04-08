import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const Work = () => {
  return (
    <Layout>
      <div className="spacer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <div className="page-intro mar-top-lg">
                <h1 className="page-title">Work</h1>
                <p>
                  We convert your super ideas to simple, minimal & elegant
                  designs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="works columns mar-top-lg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="works-filters">
                Shown: <span className="open-filters">All Projects</span>
                <div className="fullscreen-filters">
                  <div className="close-filters">Close</div>
                  <ul>
                    <li className="current" data-group='["*"]'>
                      All Projects<span></span>
                    </li>
                    <li data-group='["branding"]'>
                      Branding<span></span>
                    </li>
                    <li data-group='["design"]'>
                      Design<span></span>
                    </li>
                    <li data-group='["website"]'>
                      Website<span></span>
                    </li>
                    <li data-group='["other"]'>
                      Other<span></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="works-grid">
                <div className="works-gutter"></div>
                <Link
                  className="work-item"
                  to="/work/jyc"
                  data-groups='["website"]'
                >
                  <div className="work-image">
                    <div className="icon-arrow"></div>
                    <StaticImage
                      src="../../../static/img/works/work_1.png"
                      alt="Jaipur Youth Conclave"
                      placeholder="blurred"
                    />
                  </div>
                  <div className="work-description">
                    <h3 className="work-title">Jaipur Youth Conclave</h3>
                    <ul className="work-services">
                      <li>Website</li>
                    </ul>
                  </div>
                </Link>
                <Link
                  className="work-item"
                  to="/work/bob/"
                  data-groups='["branding","other"]'
                >
                  <div className="work-image">
                    <div className="icon-arrow"></div>
                    <StaticImage
                      src="../../../static/img/works/work_2.png"
                      alt="Battle Of Bands"
                      placeholder="blurred"
                    />
                  </div>
                  <div className="work-description">
                    <h3 className="work-title">Battle Of Bands</h3>
                    <ul className="work-services">
                      <li>Branding, Other</li>
                    </ul>
                  </div>
                </Link>
                <Link
                  className="work-item"
                  to="/work/subodh/"
                  data-groups='["design"]'
                >
                  <div className="work-image">
                    <div className="icon-arrow"></div>
                    <StaticImage
                      src="../../../static/img/works/work_3.png"
                      alt="Subodh MUN"
                      placeholder="blurred"
                    />
                  </div>
                  <div className="work-description">
                    <h3 className="work-title">Subodh Mun</h3>
                    <ul className="work-services">
                      <li>Poster Design</li>
                    </ul>
                  </div>
                </Link>
                <Link
                  className="work-item"
                  to="/work/vmb/"
                  data-groups='["website"]'
                >
                  <div className="work-image">
                    <div className="icon-arrow"></div>
                    <StaticImage
                      src="../../../static/img/works/work_4.png"
                      alt="Vision Money Bucket"
                      placeholder="blurred"
                    />
                  </div>
                  <div className="work-description">
                    <h3 className="work-title">Vision Money Bucket</h3>
                    <ul className="work-services">
                      <li>Website</li>
                    </ul>
                  </div>
                </Link>
                <Link
                  className="work-item"
                  to="/work/bvj/"
                  data-groups='["website"]'
                >
                  <div className="work-image">
                    <div className="icon-arrow"></div>
                    <StaticImage
                      src="../../../static/img/works/work_5.png"
                      alt="BVJ MUN"
                      placeholder="blurred"
                    />
                  </div>
                  <div className="work-description">
                    <h3 className="work-title">BVJ MUN</h3>
                    <ul className="work-services">
                      <li>Website</li>
                    </ul>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
