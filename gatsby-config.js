module.exports = {
  siteMetadata: {
    title: 'Heather Buchel',
    author: 'Heather Buchel',
    description: 'A starter blog demonstrating what Gatsby can do.',
    siteUrl: 'https://gatsby-starter-blog-demo.netlify.com/',
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ff0053`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/assets/hb-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Work Sans\:400,700`,
          `Playfair Display\:,700,900i` // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: `gatsby-plugin-emotion`
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ],
}
