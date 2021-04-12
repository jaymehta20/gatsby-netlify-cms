import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";

const Blog = ({ data }) => {
  const blogs = data.allMarkdownRemark.nodes;

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
              {blogs.map((blog) => (
                <div key={blog.id}>
                  <article className="mr-3">
                    <Link
                      to={"/blog/" + blog.frontmatter.slug}
                      key={blog.id.toString()}
                    >
                      <div className="article-image">
                        <div className="icon-arrow"></div>
                        <GatsbyImage image={blog.frontmatter.thumbnail} />
                      </div>
                      <div className="article-text">
                        <h4 className="title">{blog.frontmatter.title}</h4>
                        <p>{blog.frontmatter.description}</p>
                        <span className="time">{blog.frontmatter.date}</span>
                      </div>
                    </Link>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          description
          date(formatString: "DD-MMM-YYYY")
          title
          thumbnail
          slug
        }
        id
      }
    }
  }
`;

export default Blog;
