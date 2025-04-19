import React from 'react'

const Total = ({bill,tip}) => {
  return (
    <div className='item'>
      You pay ${bill + tip} (${bill}+${tip} tip)
    </div>
  )
}

export default Total