module.exports = {
  siteMetadata: {
    title: 'space-evolution-website',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(`${__dirname}/src/layouts/index.tsx`),
      },
    },
  ],
}
