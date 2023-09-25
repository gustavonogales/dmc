import React from 'react'
import { Button } from './Button'

export function CtaButton({ className, ...props }) {
  return (
    <Button
      className={`hidden md:block text-sm ${className} font-medium`}
      {...props}
    />
  )
}
