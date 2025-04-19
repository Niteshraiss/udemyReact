import React, { useState } from 'react'

const Bill = ({ bill,setBill }) => {

  return (
    <>
      <div className="from item" >
        <label htmlFor="bill">How much was the Bill</label>
        <input type="number" name='bill' id='bill' value={bill}  onChange={(e) =>setBill(Number(e.target.value))}/>
      </div>
    </>
  )
}

export default Bill