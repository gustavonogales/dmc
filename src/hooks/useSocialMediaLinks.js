import { graphql, useStaticQuery } from 'gatsby'

export const useSocialMediaLinks = () => {
  const {
    dataYaml: {
      contact: { whatsapp, instagram, email },
    },
  } = useStaticQuery(graphql`
    query {
      dataYaml {
        contact {
          whatsapp
          instagram
          email
        }
      }
    }
  `)

  return {
    whatsapp: `https://wa.me/${whatsapp.replace(/\D/g, '')}`,
    instagram: `https://www.instagram.com/${instagram.replace('@', '')}`,
    email: `mailto:${email}`,
  }
}
