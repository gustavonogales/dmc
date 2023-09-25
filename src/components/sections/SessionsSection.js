import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const SessionsSection = React.forwardRef((props, ref) => {
  const {
    dataYaml: { sessions: data },
  } = useStaticQuery(graphql`
    query {
      dataYaml {
        sessions {
          title
          items {
            title
            description
          }
          complementaryTreatments {
            title
            items
          }
        }
      }
    }
  `)

  const addBreakLine = (description) =>
    `<p>${description.replace('\n', '<br />')}</p>`

  return (
    <section className="bg-almostWhite" ref={ref} {...props}>
      <div className="container mx-auto flex flex-col py-20 relative">
        <h2 className="text-primary text-4xl font-display text-center">
          {data.title}
        </h2>
        {data.items.map((item) => (
          <div key={item.title} className="mt-10 text-primary text-lg">
            <h3 className="text-2xl inline font-display">{item.title}</h3>
            <div
              className="inline"
              dangerouslySetInnerHTML={{
                __html: addBreakLine(item.description),
              }}
            ></div>
          </div>
        ))}
        <h3 className="text-primary font-display text-2xl mt-10">
          {data.complementaryTreatments.title}
        </h3>
        <ul className="list-disc ml-6 text-primary text-lg">
          {data.complementaryTreatments.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
})
