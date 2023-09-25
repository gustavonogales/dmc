import React from 'react'
import { Button } from './Button'

export function CtaButton({ className, ...props }) {
  return (
    <Button
      className={`text-sm font-medium text-white ${className}`}
      {...props}
    />
  )
}
