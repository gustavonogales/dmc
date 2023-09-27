/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
}).the

module.exports = {
  siteMetadata: {
    title: 'Débora Martins Corrêa - Fisioterapeuta',
    siteUrl: 'https://deboramartinscorrea.netlify.app',
    description:
      'Fisioterapeuta com atendimento domiciliar e humanizado. Especializada na reabilitação físico-motora e neurológica de pacientes idosos. Agende uma consulta de avaliação.',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-use-query-params',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      __key: 'images',
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GA_KEY, // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
}
