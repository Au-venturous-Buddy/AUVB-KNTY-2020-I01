/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Popeyes Louisiana Kitchen (Robinsons Galleria)",
    author: "Au-venturous Buddy"
  },
  pathPrefix: "/AUVB-KNTY-2020-I01",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Popeyes Louisiana Kitchen (Robinsons Galleria)`,
        short_name: `AUVB-KNTY-2020-I01`,
        start_url: `/`,
        background_color: `#21D927`,
        theme_color: `#21D927`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/KainTayoLogoSmall.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
}
