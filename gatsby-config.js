/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Débora Martins Corrêa - Fisioterapeuta',
    siteUrl: 'https://deboramartinscorrea.netlify.app/',
    description:
      'Fisioterapeuta com atendimento domiciliar e humanizado. Especializada na reabilitação físico-motora e neurológica de pacientes idosos. Agende uma consulta de avaliação.',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
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
        path: './src/images/',
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
          'G-EB90CXG7MY', // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
}
