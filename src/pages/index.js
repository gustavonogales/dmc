import * as React from "react"
import { Header } from "../components/Header"
import { Footer } from '../components/Footer'
import { WelcomeSection, ProfessionalSection,  ContactSection } from '../components/sections'
import { TreatmentsSection } from "../components/sections/TreatmentsSection"


const IndexPage = () => {
  const section1Ref = React.useRef();
  const section2Ref = React.useRef();
  const section3Ref = React.useRef();
  const section4Ref = React.useRef();

  const sections = [
    {
      id: 'welcome',
      label: 'Home',
      ref: section1Ref,
      component: WelcomeSection
    },
    {
      id: 'professional',
      label: 'A Profissional',
      ref: section2Ref,
      component: ProfessionalSection,
    },
    {
      id: 'treatments',
      label: 'Tratamentos',
      ref: section3Ref,
      component: TreatmentsSection,
    },
    {
      id: 'contact',
      label: 'Contato',
      ref: section4Ref,
      component: ContactSection,
    }
  ]
  
  return (
    <>
      <Header sections={sections} />
      <main>
        {sections.map(({component: Component, ref, id}) => (
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
    <title>Débora Martins Corrêa - Fisioterapeuta</title>
    <meta name="description" content="Débora Martins Correa Fisioterapeuta" />
  </>
)
