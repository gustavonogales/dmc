import React from 'react'

export function Button({ className, children, ...props }) {
  return (
    <a
      {...props}
      className={`bg-primary rounded-full px-8 py-2 text-background font-body font-semibold text-xs sm:text-base ${className}`}
    >
      {children}
    </a>
  )
}
