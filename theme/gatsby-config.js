const path = require("path");
module.exports = ({ contentPath = "content", basePath = "/" }) => {
  console.log(contentPath, basePath);
  return {
    siteMetadata: {
      name: "Nova Blog",
      title: "Easiest way to create a blog!",
      social: {
        facebook: "altcampus",
        twitter: "altcampus",
        github: "altcampus",
        email: "sample@example.com"
      }
    },
    plugins: [
      "gatsby-transformer-sharp",
      "gatsby-plugin-sharp",
      "gatsby-plugin-sass",
      {
        resolve: "gatsby-mdx",
        options: {
          extensions: [".md", ".mdx"],
          defaultLayouts: {
            default: require.resolve("./src/components/Layout.js")
          },
          gatsbyRemarkPlugins: [
            { resolve: "gatsby-remark-images" },
            {
              resolve: "gatsby-remark-prismjs"
            }
          ]
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "posts", // name of the folder
          path: path.resolve("./posts") // path of url
        }
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(__dirname, `src`, `pages`)
        }
      }
    ]
  };
};
