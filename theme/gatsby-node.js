const path = require("path");
const fs = require("fs");

const PostTemplate = require.resolve(`./src/templates/Post`);
const TagTemplate = require.resolve(`./src/templates/Tags`);

exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = "content";
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

/**
 * When shipping NPM modules, they typically need to be either
 * pre-compiled or the user needs to add bundler config to process the
 * files. Gatsby lets us ship the bundler config *with* the theme, so
 * we never need a lib-side build step.  Since we dont pre-compile the
 * theme, this is how we let webpack know how to process files.
 */
exports.onCreateWebpackConfig = ({ loaders, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.dirname(require.resolve("gatsby-theme-grid-blog")),
          use: [loaders.js()]
        }
      ]
    }
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        nodes {
          frontmatter {
            slug
            categories
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panic("Failed to create pages for the posts", result.errors);
  }
  let posts = result.data.allMdx.nodes;
  let tags = [
    ...new Set(
      posts.reduce((acc, post) => {
        return acc.concat(post.frontmatter.categories);
      }, [])
    )
  ];
  posts.forEach(post => {
    createPage({
      path: post.frontmatter.slug,
      component: require.resolve(PostTemplate),
      context: {
        slug: post.frontmatter.slug
      }
    });
  });
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag}`,
      component: require.resolve(TagTemplate),
      context: {
        tag
      }
    });
  });
};
