import React from "react";

export function NavLink({isActive, children, ...props}) {
  return (
    <a 
      {...props} 
      className={`relative text-primary text-md lg:text-lg font-body
        ${isActive && 'font-bold md:before:content=[""] md:before:absolute md:before:-bottom-1 md:before:left-0 md:before:right-0 md:before:h-0.5 md:before:bg-accent md:font-normal'}
      `}
    >
      {children}
    </a>
  )
}