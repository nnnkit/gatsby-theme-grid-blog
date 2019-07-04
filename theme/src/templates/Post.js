import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-mdx";
import Layout from "../components/Layout";
import Img from "gatsby-image";

export default function Post({ data: { mdx: post } }) {
  const { banner, title, date, categories } = post.frontmatter;
  return (
    <Layout>
      <div className="post-single-container">
        <article className="post-single">
          <header>
            <h1 className="post-single__title">{title}</h1>
            <div className="blog__details flex-start">
              <span>{date}</span>
              {categories.map(category => (
                <Link to={`/tags/${category}`}>
                  <span className="tag">{category}</span>
                </Link>
              ))}
            </div>
            <Img
              fluid={banner.sharp.fluid}
              alt={title}
              className="img-responsive post-single__img"
            />
          </header>
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </article>
        <div className="blog__details flex-start">
          {categories &&
            categories.map(category => (
              <Link className="tag" to={`/tags/${category}`}>
                {category}
              </Link>
            ))}
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        banner {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        date(formatString: "MMMM Do, YYYY")
        categories
      }
      code {
        body
      }
    }
  }
`;
