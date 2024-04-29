/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Your Gatsby Site",
    description: "A description of your Gatsby site",
    author: "Your Name",
    siteUrl: "https://www.yoursite.com",
  },
  plugins: [
    "gatsby-plugin-typescript",
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `noeji9nrb995`,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
      },
    },
  ],
}
