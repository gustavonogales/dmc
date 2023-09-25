import React, { useMemo, useState, useEffect } from 'react'
import { NavLink } from './NavLink'
import { StaticImage } from 'gatsby-plugin-image'
import { HamburguerIcon } from './icons/HamburguerIcon'
import { XIcon } from './icons/XIcon'
import { getNearestIndex } from '../utils/getNearestIndex'
import { useStaticQuery, graphql } from 'gatsby'
import { CtaButton } from './CtaButton'
import { InstagramIcon } from './icons/InstagramIcon'
import { useSocialMediaLinks } from '../hooks/useSocialMediaLinks'
import { WhatsappIcon } from './icons/WhatsappIcon'

export function Header({ sections }) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const { whatsapp, instagram } = useSocialMediaLinks()
  const {
    dataYaml: { cta },
  } = useStaticQuery(graphql`
    query {
      dataYaml {
        cta
      }
    }
  `)

  useEffect(() => {
    const updatePosition = () => {
      var index = getNearestIndex(
        window.scrollY,
        sections,
        0,
        sections.length - 1
      )
      setActiveIndex(index)
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', updatePosition)
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [sections])

  const links = useMemo(
    () =>
      sections.map((section, index) => (
        <NavLink
          key={section.id}
          href={`#${section.id}`}
          onClick={() => setIsOpen(false)}
          isActive={activeIndex === index}
        >
          {section.label}
        </NavLink>
      )),
    [activeIndex, sections]
  )

  const firstSectionId = `#${sections[0].id}`
  const lastSectionId = `#${sections[sections.length - 1].id}`

  return (
    <header
      className={`mx-auto py-2 px-4 lg:p-4 sticky top-0 left-0 right-0 bg-background z-50 transition-shadow 
      ${scrollPosition > 0 && 'shadow-md'}
    `}
    >
      <div className="container flex gap-4 justify-between items-center mx-auto">
        <a href={firstSectionId}>
          <div className="hidden xl:block">
            <StaticImage
              src="../images/logo.svg"
              alt="Débora Martins Corrêa Logo"
              placeholder="blurred"
              quality={100}
              className="w-8/12"
            />
          </div>
          <div className="block xl:hidden">
            <StaticImage
              src="../images/logo-icon.svg"
              alt="Débora Martins Corrêa Logo"
              placeholder="blurred"
              quality={100}
              className="w-10"
            />
          </div>
        </a>
        <nav className="hidden md:flex gap-8">{links}</nav>
        <div className="hidden md:flex">
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="text-primary"
            title="Whatsapp"
          >
            <WhatsappIcon className="inline" />
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="text-primary"
            title="Instagram"
          >
            <InstagramIcon className="inline" />
          </a>
          <CtaButton className="ml-2" href={lastSectionId}>
            {cta}
          </CtaButton>
        </div>
        <button
          className="md:hidden text-primary p-2 transition-all"
          onClick={() => setIsOpen((state) => !state)}
        >
          <HamburguerIcon
            className={`transition-all ${
              isOpen ? 'hidden opacity-0' : 'block opacity-100'
            }`}
          />
          <XIcon
            className={`transition-all ${
              isOpen ? 'block opacity-100' : 'hidden opacity-0'
            }`}
          />
        </button>
      </div>
      <div className="md:hidden">
        <div
          className={`pt-4 py-2 flex flex-col gap-4 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          {links}
        </div>
      </div>
    </header>
  )
}
