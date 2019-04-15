module.exports = {
  siteMetadata: {
    title: 'Alexander Lavin',
    description: 'AI & SW',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-stylus',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `karla\:400,500`,
        ],
      },
    },
  ],
}
