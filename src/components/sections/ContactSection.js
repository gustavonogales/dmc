import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { WhatsappIcon } from '../icons/WhatsappIcon'
import { InstagramIcon } from '../icons/InstagramIcon'
import { EmailIcon } from '../icons/EmailIcon'
import { useSocialMediaLinks } from '../../hooks/useSocialMediaLinks'
import { CtaButton } from '../CtaButton'

export const ContactSection = React.forwardRef((props, ref) => {
  const { email, instagram, whatsapp } = useSocialMediaLinks()
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
          cta
        }
      }
    }
  `)

  return (
    <section className="bg-background" ref={ref} {...props}>
      <div className="container mx-auto flex flex-col lg:flex-row py-20 gap-8 lg:gap-20 lg:items-center">
        <div className="w-full xl:w-2/5 flex flex-col items-center lg:items-start">
          <h2 className="font-display text-primary text-4xl sm:text-6xl text-center lg:text-start">
            {data.title}
          </h2>
          <p className="font-body leading-body text-primary text-sm sm:text-base md:text-lg text-center lg:text-start mt-4">
            {data.description}
          </p>
          <ul className="mt-20 text-center lg:text-start">
            <li>
              <a
                href={whatsapp}
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
                href={instagram}
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
                href={email}
                target="_blank"
                rel="noreferrer"
                className="text-primary"
              >
                <EmailIcon className="inline" />
                <span className="font-bold">{data.email}</span>
              </a>
            </li>
          </ul>
          <CtaButton
            className="mt-20 mb-10 lg:mb-0"
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            {data.cta} <span className="font-bold">Whatsapp</span>
          </CtaButton>
        </div>
        <div className="w-full xl:w-3/5">
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
