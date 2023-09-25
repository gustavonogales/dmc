import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './index.module.css'
import { ChevronLeftIcon } from '../../icons/ChevronLeftIcon'
import { ChevronRightIcon } from '../../icons/ChevronRightIcon'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { ReviewCard } from '../../ReviewCard'
import { useStaticQuery, graphql } from 'gatsby'

export const ProfessionalSection = React.forwardRef((props, ref) => {
  const {
    dataYaml: { professional: data },
  } = useStaticQuery(graphql`
    query {
      dataYaml {
        professional {
          name
          id
          bio
          bioSecondParagraph
          technicalSpecializations {
            title
            items
          }
          reviews {
            title
            items {
              name
              content
              link
            }
          }
        }
      }
    }
  `)

  return (
    <section className={`bg-primary ${styles?.pattern}`} ref={ref} {...props}>
      <div className="container mx-auto flex flex-col gap-20 z-20 py-20 lg:py-40 relative">
        <div className="flex gap-20 justify-end">
          <StaticImage
            src={'../../../images/physiotherapist.svg'}
            alt="Físioterapeuta em pé com uma prancheta na mão"
            placeholder="blurred"
            layout="fixed"
            quality={100}
            className="!object-contain !absolute left-20 top-20 hidden lg:block"
          />
          <article className="flex flex-col text-center  w-full lg:w-1/2 xl:w-1/2  2xl:w-2/3">
            <h2 className="text-background text-4xl font-display">
              {data.name}
            </h2>
            <span className="text-background font-body font-semibold">
              {data.id}
            </span>
            <p className="mt-6 font-body text-sm sm:text-base md:text-lg leading-body text-background text-start">
              {data.bio}
            </p>
            <p className="mt-4 font-body text-sm sm:text-base md:text-lg leading-body text-background text-start">
              {data.bioSecondParagraph}
            </p>
            <h3 className="text-background text-4xl font-display mt-8">
              {data.technicalSpecializations.title}
            </h3>
            <ul className="list-disc font-body text-background text-start mt-4 ml-6 text-sm sm:text-base md:text-lg">
              {data.technicalSpecializations.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
        <article>
          <h3 className="text-background text-4xl font-display self-center text-center mb-8">
            {data.reviews.title}
          </h3>
          <Carousel
            axis="horizontal"
            swipeable
            autoPlay={false}
            slidesToSlide={1}
            partialVisbile={false}
            keyBoardControl
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            responsive={{
              '2xl': {
                breakpoint: {
                  max: 9999,
                  min: 1536,
                },
                items:
                  data.reviews.items.length < 3 ? data.reviews.items.length : 3,
              },
              xl: {
                breakpoint: {
                  max: 1536,
                  min: 1280,
                },
                items: 3,
              },
              md: {
                breakpoint: {
                  max: 1280,
                  min: 768,
                },
                items: 2,
              },
              sm: {
                breakpoint: {
                  max: 768,
                  min: 0,
                },
                items: 1,
              },
            }}
          >
            {data.reviews.items.map((review) => (
              <ReviewCard
                key={review.name}
                title={review.name}
                description={review.content}
                link={review.link}
              />
            ))}
          </Carousel>
        </article>
      </div>
    </section>
  )
})

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute z-10 right-0 bg-primary opacity-50 p-4 rounded-2xl hover:opacity-100"
      aria-label="Próximo"
      title="Próximo"
    >
      <ChevronRightIcon className="text-background font-bold" />
    </button>
  )
}

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute z-10 left-0 bg-primary opacity-50 p-4 rounded-2xl hover:opacity-100"
      aria-label="Anterior"
      title="Anterior"
    >
      <ChevronLeftIcon className="text-background font-bold" />
    </button>
  )
}
