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
          firstContact {
            title
            description
          }
          treatmentSession {
            title
            description
          }
          severePainRelief {
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

  const content = [
    data.firstContact,
    data.treatmentSession,
    data.severePainRelief,
  ]

  return (
    <section className="bg-almostWhite" ref={ref} {...props}>
      <div className="container mx-auto flex flex-col px-4 py-20 relative">
        <h2 className="text-primary text-4xl font-display text-center">
          {data.title}
        </h2>
        {content.map((item) => (
          <span key={item.title} className="mt-10 text-primary text-lg">
            <h3 className="font-bold text-xl inline">{item.title}: </h3>
            <span
              dangerouslySetInnerHTML={{
                __html: addBreakLine(item.description),
              }}
            ></span>
          </span>
        ))}
        <h3 className="text-primary font-bold text-xl mt-10">
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
