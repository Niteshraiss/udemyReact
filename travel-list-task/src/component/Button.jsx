import React from 'react'

const Button = ({onClick}) => {
  return (
    <div className='item'>
      <button onClick={onClick}>Reset</button>
    </div>
  )
}

export default Button