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
      </div>
    </section>
  )
})
