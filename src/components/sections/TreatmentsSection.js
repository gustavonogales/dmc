import React from 'react'

export const TreatmentsSection = React.forwardRef((props, ref) => {
  return (
    <h1 ref={ref} {...props}>
      Treatments
    </h1>
  )
})
