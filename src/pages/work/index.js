import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";

import "../../styles/style.css";
import "../../styles/bootstrap-grid.min.css";
import "../../styles/animsition.min.css";

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
                <a
                  className="work-item"
                  href="work/jyc.html"
                  data-groups='["website"]'
                >
                  <div className="work-image">
                    <div className="icon-arrow"></div>
                    <img
                      src="./img/works/work_1.jpg"
                      alt="Jaipur Youth Conclave"
                    />
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
                  href="work/bob.html"
                  data-groups='["branding","other"]'
                >
                  <div className="work-image">
                    <div className="icon-arrow"></div>
                    <img src="./img/works/work_2.jpg" alt="Battle Of Bands" />
                  </div>
                  <div className="work-description">
                    <h3 className="work-title">Battle Of Bands</h3>
                    <ul className="work-services">
                      <li>Branding, Other</li>
                    </ul>
                  </div>
                </a>
                <a
                  className="work-item"
                  href="work/subodh.html"
                  data-groups='["design"]'
                >
                  <div className="work-image">
                    <div className="icon-arrow"></div>
                    <img src="./img/works/work_3.jpg" alt="Subodh MUN" />
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
                  href="work/vmb.html"
                  data-groups='["website"]'
                >
                  <div className="work-image">
                    <div className="icon-arrow"></div>
                    <img
                      src="./img/works/work_4.jpg"
                      alt="Vision Money Bucket"
                    />
                  </div>
                  <div className="work-description">
                    <h3 className="work-title">Vision Money Bucket</h3>
                    <ul className="work-services">
                      <li>Website</li>
                    </ul>
                  </div>
                </a>
                <a
                  className="work-item"
                  href="./work/bvj.html"
                  data-groups='["website"]'
                >
                  <div className="work-image">
                    <div className="icon-arrow"></div>
                    <img src="./img/works/work_5.jpg" alt="BVJ MUN" />
                  </div>
                  <div className="work-description">
                    <h3 className="work-title">BVJ MUN</h3>
                    <ul className="work-services">
                      <li>Website</li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
