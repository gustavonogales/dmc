import React from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

export const Seo = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />

      <meta name="og:url" content={seo.url} />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:image" content={`${seo.url}/images/card.png`} />
      <meta name="og:image:secure_url" content={`${seo.url}/images/card.png`} />
      <meta name="og:image:type" content="image/png" />
      <meta name="og:image:width" content="1200" />
      <meta name="og:image:height" content="630" />
      <meta name="og:locale" content="pt_BR" />
      <meta name="og:site_name" content={seo.title} />
      {children}
    </>
  )
}
