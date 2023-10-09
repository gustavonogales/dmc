import { graphql, useStaticQuery } from 'gatsby'

export const useSocialMediaLinks = () => {
  const {
    dataYaml: {
      contact: { whatsapp, instagram, email, text },
    },
  } = useStaticQuery(graphql`
    query {
      dataYaml {
        contact {
          whatsapp
          instagram
          email {
            link
            subject
          }
          text
        }
      }
    }
  `)

  return {
    whatsapp: `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${text}`,
    instagram: `https://www.instagram.com/${instagram.replace('@', '')}`,
    email: `mailto:${email.link}?subject=${email.subject}&body=${text}`,
  }
}
