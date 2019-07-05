module.exports = {
  siteMetadata: {
    name: "Sample Blog",
    title: "Learning To Code",
    social: {
      facebook: "nnnkit",
      twitter: "nnnkit",
      github: "nnnkit",
      email: "iankit@example.com"
    }
  },
  plugins: [
    {
      resolve: "gatsby-theme-grid-blog",
      options: {
        contentPath: "sample",
        basePath: "/"
      }
    }
  ]
};
