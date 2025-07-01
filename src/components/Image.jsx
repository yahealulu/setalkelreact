import React from 'react'

const Image = ({ src, alt, className, ...props }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      {...props}
    />
  )
}

export default Image