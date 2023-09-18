import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

const NotFoundPage = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-primary font-display text-8xl">404</h1>
      <p className="text-primary font-body text-center text-lg mt-4 line-clamp-2">
        Desculpe, não encontramos a página que você está procurando.
      </p>
      <StaticImage 
        src={'../images/searching.svg'} 
        alt="Físioterapeuta procurando algo com uma lupa grande na mão" 
        placeholder="blurred" 
        quality={100}
        layout="constrained"
      />
      <Link className="mt-8 text-primary font-bold text-lg" to="/">Voltar para tela inicial</Link>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
