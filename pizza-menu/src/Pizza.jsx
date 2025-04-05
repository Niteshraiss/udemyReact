import React from 'react'

export const Pizza = ({pizza},index) => {

    return (
        <>
                {
                    <div className={`pizza-element ${pizza.soldOut ? "sold-out" :""}`} key={index}>
                        <img src={'../images/' + pizza.photoName} className='img' />
                        <div className="pizza-details">
                            <p>Name: {pizza.name}</p>
                            <p>Price: {pizza.price}</p>
                            <p>Ingredients: {pizza.soldOut ?'Sold out' :pizza.ingredients}</p>
                        </div>
                    </div>

                }
 
        </>
    )
}
