import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

const Template = ({ data }) => {
  console.log(data);
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
      html
      frontmatter {
        date(formatString: "DD-MM-YYYY")
        description
        title
        thumbnail
      }
    }
  }
`;

export default Template;
