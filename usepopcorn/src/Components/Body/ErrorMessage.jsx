import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div className='error'>
        <span>⚠</span>{message}
    </div>
  )
}

export default ErrorMessage