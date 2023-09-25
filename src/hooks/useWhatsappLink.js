import { graphql, useStaticQuery } from 'gatsby'

export const useWhatsappLink = () => {
  const {
    dataYaml: {
      contact: { whatsapp },
    },
  } = useStaticQuery(graphql`
    query {
      dataYaml {
        contact {
          whatsapp
        }
      }
    }
  `)

  return `https://wa.me/${whatsapp.replace(/\D/g, '')}`
}
