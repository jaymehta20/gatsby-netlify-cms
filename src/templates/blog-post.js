import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";

const Template = ({ data }) => {
  // const data = useStaticQuery(postQuery);
  // const {
  //   markdownRemark: { frontmatter: blogs },
  // } = data;
  const { html } = data.markdownRemark;
  const { title, description, date } = data.markdownRemark.frontmatter;
  return (
    <div>
      <Layout>
        <div className="spacer">
          <article className="single">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                  <div className="mar-top-lg">
                    <span className="time">{date}</span>
                    <h2 className="article-title">{title}</h2>
                    <p>{description}</p>
                  </div>
                  <div
                    className="image-fix"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </div>
              </div>
              <div className="row"></div>
              <div className="next-article">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2 col-md-12">
                    <p>Next Article</p>
                    <h2>
                      <Link to="/">Master frost gradients.</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Layout>
    </div>
  );
};

export const postQuery = graphql`
  query BlogDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        description
        date(formatString: "DD-MMM-YYYY")
        title
      }
      html
    }
  }
`;

export default Template;
