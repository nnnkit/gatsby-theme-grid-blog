const path = require("path");
module.exports = themeOption => {
  const { title, name, social } = themeOption;
  return {
    siteMetadata: {
      title: title,
      name: name,
      social: social
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
        resolve: "gatsby-plugin-compile-es6-packages",
        options: {
          modules: ["gatsby-theme-grid-blog"]
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
