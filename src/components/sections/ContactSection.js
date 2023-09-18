import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { WhatsappIcon } from '../icons/WhatsappIcon'
import { InstagramIcon } from '../icons/InstagramIcon'
import { EmailIcon } from '../icons/EmailIcon'

export const ContactSection = React.forwardRef((props, ref) => {
  const {
    dataYaml: { contact: data },
  } = useStaticQuery(graphql`
    query {
      dataYaml {
        contact {
          title
          description
          whatsapp
          instagram
          email
        }
      }
    }
  `)

  const whatsappLink = `https://wa.me/${data.whatsapp.replace(/\D/g, '')}`
  const instagramLink = `https://www.instagram.com/${data.instagram.replace(
    '@',
    ''
  )}`
  const emailLink = `mailto:${data.email}`

  return (
    <section className="bg-background" ref={ref} {...props}>
      <div className="container mx-auto flex flex-col lg:flex-row px-4 py-20 gap-8 lg:gap-20">
        <div className="flex-1 flex-grow">
          <h2 className="font-display text-primary text-4xl sm:text-6xl text-center lg:text-start">
            {data.title}
          </h2>
          <p className="font-body leading-body text-primary text-sm sm:text-base md:text-lg text-center lg:text-start mt-4">
            {data.description}
          </p>
          <ul className="mt-20 text-center lg:text-start">
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="text-primary"
              >
                <WhatsappIcon className="inline" />
                <span className="font-bold">{data.whatsapp}</span>
              </a>
            </li>
            <li>
              <a
                href={instagramLink}
                target="_blank"
                rel="noreferrer"
                className="text-primary"
              >
                <InstagramIcon className="inline" />
                <span className="font-bold">{data.instagram}</span>
              </a>
            </li>
            <li>
              <a
                href={emailLink}
                target="_blank"
                rel="noreferrer"
                className="text-primary"
              >
                <EmailIcon className="inline" />
                <span className="font-bold">{data.email}</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <StaticImage
            src={'../../images/old-man-woman-wheel-chair.svg'}
            alt="Senhor idoso em pé ao lado de uma moça cadeirante ambos de frente para a fisioterapeuta, que está acenando com a mão"
            placeholder="blurred"
            layout="fullWidth"
            quality={100}
          />
        </div>
      </div>
    </section>
  )
})
