import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby"
import { CtaButton } from "../CtaButton";

export const WelcomeSection = React.forwardRef((props, ref) => {
  const { dataYaml: { welcome: data } } = useStaticQuery(graphql`
    query {
      dataYaml {
        welcome {
          title
          description
        }
      }
    }
  `)

  return (
    <section className="px-4 container mx-auto bg-background" ref={ref} {...props}>
      <div className="mt-8 md:my-20 flex gap-10 lg:gap-20 flex-col h-auto lg:flex-row ">
        <div className="flex-1 flex gap-6 flex-col text-center justify-center lg:text-left items-center lg:items-start sm:py-8">
          <h1 className="text-primary font-display line-clamp-2 text-4xl sm:text-6xl md:text-8xl">{data.title}</h1>
          <p className="font-body text-sm sm:text-base md:text-lg leading-body text-primary">{data.description}</p>
          <CtaButton />
        </div>
        <div className="flex-1 flex xl:justify-end justify-center items-center">
          <StaticImage 
            as="div"
            src={'../../images/old-lady-ball.svg'} 
            alt="Físioterapeuta acompanhando o tratamento de uma senhora que está sentada em uma bola de pilates" 
            placeholder="blurred" 
            quality={100}
            objectFit="fill"
          />
        </div>
      </div>
    </section>
  )
})