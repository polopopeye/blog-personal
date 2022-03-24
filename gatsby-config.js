module.exports = {
  flags: {
    THE_FLAGS: false,
  },
  siteMetadata: {
    title: `Blog Personal`,
    description: `Blog Donde Mostrar Proyectos y CV.`,
    author: `@elmerca69`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: 'AIzaSyCrGBWA3bqK65YK7jaUuFWlr0hRLbUlj1A',
          authDomain: 'blog-personal-kenneth.firebaseapp.com',
          projectId: 'blog-personal-kenneth',
          storageBucket: 'blog-personal-kenneth.appspot.com',
          messagingSenderId: '833941574074',
          appId: '1:833941574074:web:701c36ab165f5e84690d83',
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
