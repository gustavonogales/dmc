import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from './index.module.css';
import { ChevronLeftIcon } from "../../icons/ChevronLeftIcon";
import { ChevronRightIcon } from "../../icons/ChevronRightIcon";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ReviewCard } from "../../ReviewCard";
import { useStaticQuery, graphql } from "gatsby"

export const ProfessionalSection = React.forwardRef((props, ref) => {
  const { dataYaml: { professional: data } } = useStaticQuery(graphql`
    query {
      dataYaml {
        professional {
          name
          id
          description
          reviews {
            title
            items {
              name
              content
            }
          }
        }
      }
    }
  `)

  return (
    <section className={`bg-primary ${styles?.pattern}`} ref={ref} {...props}>
      <div className="container mx-auto flex flex-col gap-20 z-20 px-4 py-20 lg:py-40 relative" >
        <div className="flex gap-20 justify-end">
        <StaticImage 
          src={'../../../images/physiotherapist.svg'} 
          alt="Físioterapeuta em pé com uma prancheta na mão" 
          placeholder="blurred"
          layout="fixed"
          quality={100}
          className="!object-contain !absolute left-20 top-20 hidden lg:block"
        />
          <article className="flex flex-col text-center items-center lg:items-start w-full lg:w-1/2 xl:w-1/2  2xl:w-2/3">
            <h2 className="text-background text-4xl font-display">
              {data.name}
            </h2>
            <span className="text-background">
              {data.id}
            </span>
            <p className="mt-6 font-body text-sm sm:text-base md:text-lg leading-body text-background text-center lg:text-start">
              {data.description}
            </p>
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
            customLeftArrow={<CustomLeftArrow/>}
            customRightArrow={<CustomRightArrow/>}
            responsive={{
              '2xl': {
                breakpoint: {
                  max: 9999,
                  min: 1536,
                },
                items: data.reviews.items.length < 4 ? data.reviews.items.length : 4,
                
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
                  min: 768
                },
                items: 2,
              },
              sm: {
                breakpoint: {
                  max: 768,
                  min: 0,
                },
                items: 1,
              }
            }}
          >
            {data.reviews.items.map((review) => (
              <ReviewCard 
                key={review.name}
                title={review.name}
                description={review.content}
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
    >
      <ChevronRightIcon className='text-background font-bold'/>
    </button>
  );
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="absolute z-10 left-0 bg-primary opacity-50 p-4 rounded-2xl hover:opacity-100"
    >
      <ChevronLeftIcon className='text-background font-bold'/>
    </button>
  );
};
