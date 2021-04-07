import React from "react";
import { Link, graphql } from "gatsby";

import "../../styles/style.css";
import "../../styles/bootstrap-grid.min.css";
import "../../styles/animsition.min.css";
import Layout from "../../components/Layout";

const Blog = () => {
  // const blogs = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div className="spacer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <div className="page-intro mar-top-lg">
                <h1 className="page-title">Blog</h1>
                <p>Sharing super ideas in simple, minimal & elegant way.</p>
              </div>
            </div>
          </div>

          <div className="articles-list">
            <div className="grids">
              <article className="mr-3">
                <Link to="/">
                  <div className="article-image">
                    <div className="icon-arrow"></div>
                    <img src="" alt="Blog post thumbnail" />
                  </div>
                  <div className="article-text">
                    <h4 className="title">This is working</h4>
                    <p>IDK How, but it's working</p>
                    <span className="time">April 7</span>
                  </div>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// export const pageQuery = graphql`
//   query BlogIndexQuery {
//     allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
//       nodes {
//         frontmatter {
//           description
//           slug
//           title
//           thumbnail
//           date(formatString: "DD-MM-YYYY")
//         }
//         id
//       }
//     }
//   }
// `;

export default Blog;
