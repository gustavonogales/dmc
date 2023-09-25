import * as React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  WelcomeSection,
  ProfessionalSection,
  ContactSection,
  SessionsSection,
} from '../components/sections'
import { Seo } from '../components/Seo'

const IndexPage = () => {
  const section1Ref = React.useRef()
  const section2Ref = React.useRef()
  const section3Ref = React.useRef()
  const section4Ref = React.useRef()

  const sections = [
    {
      id: 'welcome',
      label: 'Home',
      ref: section1Ref,
      component: WelcomeSection,
    },
    {
      id: 'professional',
      label: 'A Profissional',
      ref: section2Ref,
      component: ProfessionalSection,
    },
    {
      id: 'sessions',
      label: 'Sessões',
      ref: section3Ref,
      component: SessionsSection,
    },
    {
      id: 'contact',
      label: 'Contato',
      ref: section4Ref,
      component: ContactSection,
    },
  ]

  return (
    <>
      <Header sections={sections} />
      <main>
        {sections.map(({ component: Component, ref, id }) => (
          <Component key={id} ref={ref} id={id} />
        ))}
      </main>
      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <html className="scroll-smooth" lang="pt-BR" />
    <body className="bg-background" />
    <Seo />
  </>
)
