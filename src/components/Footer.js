import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export function Footer() {
  const {
    dataYaml: { footer: data },
  } = useStaticQuery(graphql`
    query {
      dataYaml {
        footer {
          copyright
          # poweredBy
        }
      }
    }
  `)

  return (
    <footer className="flex flex-col gap-4 px-4 py-8 relative items-center">
      <span className="text-primary font-body flex-1 text-center text-sm sm:text-base md:text-lg">
        {data.copyright}
      </span>
      {/* <span className="block md:absolute md:right-4 text-primary font-body text-sm sm:text-base md:text-lg">
        {data.poweredBy}
      </span> */}
    </footer>
  )
}
