import React from 'react'

const Order = ({closeHour}) => {
    return (
        <>
            <div className="order">
                <p>We are open till {closeHour}:00 Let's carve our hunger</p>
                <button className='btn'>Order</button>
            </div>
        </>
    )
}

export default Order