import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Link = ({ to, href, children, className, ...props }) => {
  // Use 'to' prop for internal navigation, 'href' for external links
  const linkTo = to || href
  
  if (href && href.startsWith('http')) {
    // External link
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    )
  }
  
  // Internal link
  return (
    <RouterLink to={linkTo} className={className} {...props}>
      {children}
    </RouterLink>
  )
}

export default Link