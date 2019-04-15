module.exports = {
  siteMetadata: {
    title: 'Alexander Lavin',
    description: 'Hello world!',
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
          `montserrat\:400,500`,
          `source-code-pro\:400,500`,
        ],
      },
    },
  ],
}
