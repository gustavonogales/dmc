import React from 'react';
import { StarIcon } from "./icons/StarIcon";

export function ReviewCard({title, description,...props}) {
  return (
    <div 
      className="bg-background rounded-3xl shadow py-8 px-10 flex flex-col gap-4 items-center h-full mx-4 min-h-80" 
      {...props}
    >
      <div className="flex flex-col gap-2 items-center">
        <span className="select-none font-body font-bold text-primary text-xl sm:text-2xl text-center">{title}</span>
        <div className="flex gap-1">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>
      <p className="select-none text-center font-body text-primary">{description}</p>
    </div>
  )
}