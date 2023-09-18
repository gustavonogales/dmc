import React from "react";
import { Button } from './Button'
import { useStaticQuery, graphql } from "gatsby"

export function CtaButton({className, children, ...props}) {
  const { dataYaml: { cta } } = useStaticQuery(graphql`
    query {
      dataYaml {
        cta
      }
    }
  `)

  return (
    <Button href="#contact" className={`hidden md:block text-sm ${className}`}>{cta}</Button>
  )
}