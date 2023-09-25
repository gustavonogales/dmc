import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { CtaButton } from '../CtaButton'
import { useSocialMediaLinks } from '../../hooks/useSocialMediaLinks'

export const WelcomeSection = React.forwardRef((props, ref) => {
  const { whatsapp } = useSocialMediaLinks()
  const {
    dataYaml: { welcome: data },
  } = useStaticQuery(graphql`
    query {
      dataYaml {
        welcome {
          title
          description
          cta
        }
      }
    }
  `)

  return (
    <section
      className="pt-8 md:py-20 container mx-auto bg-background"
      ref={ref}
      {...props}
    >
      <div className="flex gap-10 xl:gap-0 flex-col h-auto xl:flex-row ">
        <div className="w-full xl:w-7/12 flex gap-6 flex-col text-center justify-center xl:text-left items-center xl:items-start sm:py-8">
          <h1 className="text-primary font-display line-clamp-2 text-4xl sm:text-6xl md:text-8xl">
            {data.title}
          </h1>
          <p className="font-body text-sm sm:text-base md:text-lg leading-body text-primary">
            {data.description}
          </p>
          <CtaButton href={whatsapp} target="_blank" rel="noreferrer">
            {data.cta} <span className="font-bold">Whatsapp</span>
          </CtaButton>
        </div>
        <div className="w-full xl:w-5/12 flex-1 flex xl:justify-end justify-center items-center flex-grow">
          <StaticImage
            src={'../../images/old-lady-ball.svg'}
            alt="Físioterapeuta acompanhando o tratamento de uma senhora que está sentada em uma bola de pilates"
            placeholder="blurred"
            quality={100}
          />
        </div>
      </div>
    </section>
  )
})
