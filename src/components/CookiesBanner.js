import React, { useEffect, useState } from 'react'

export function CookiesBanner() {
  const cookie = `ga-disable-${process.env.GA_KEY}`
  const [hasSeenBanner, setHasSeenBanner] = useState(true)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    setHasSeenBanner(localStorage.getItem('hasSeenCookiesBanner') === 'true')
  }, [])

  function savePreferences() {
    localStorage.setItem('hasSeenCookiesBanner', 'true')
  }

  function disableCookies(disable) {
    document.cookie = `${cookie}=${disable}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`
    window[cookie] = disable
    setHide(true)
  }

  if (hasSeenBanner) return null

  return (
    <div
      onAnimationEnd={() => {
        savePreferences()
      }}
      className={`fixed bottom-0 left-0 right-0 rounded-tl-md rounded-tr-md bg-accentLight shadow-2xl p-4 z-50 ${
        hide && 'animate-hide'
      }`}
    >
      <div className="container flex flex-col md:flex-row justify-between items-center mx-auto gap-2">
        <span className="text-primary font-medium font-body text-sm text-center md:text-start">
          Este site utiliza cookies para melhorar sua experiência.
        </span>
        <div className="flex  gap-2 sm:gap-4 flex-col sm:flex-row">
          <button
            className="bg-accent rounded-md py-2 px-4 text-primary font-bold font-body text-sm transition-colors"
            onClick={() => disableCookies(false)}
          >
            Aceitar cookies
          </button>
          <button
            className="bg-accent rounded-md py-2 px-4 text-primary font-bold font-body text-sm"
            onClick={() => disableCookies(true)}
          >
            Recusar cookies
          </button>
        </div>
      </div>
    </div>
  )
}
