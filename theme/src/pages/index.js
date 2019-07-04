import React from "react";
import { graphql } from "gatsby";
import PostGrid from "../components/PostGrid";
import Layout from "../components/Layout";

export default function posts({
  data: {
    allMdx: { nodes: posts }
  }
}) {
  console.log(posts);
  return (
    <Layout>
      <section className="padding">
        <div className="container">
          <div className="blog-section__wrapper sm-col1">
            {posts.map(post => (
              <PostGrid key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexPosts {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { published: { eq: true } } }
      limit: 10
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
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
        excerpt
      }
    }
  }
`;
