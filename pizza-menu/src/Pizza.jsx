import React from 'react'

export const Pizza = () => {
    const pizzaData = [
        {
            name: "Focaccia",
            ingredients: "Bread with italian olive oil and rosemary",
            price: 6,
            photoName: "focaccia.jpg",
            soldOut: false,
        },
        {
            name: "Pizza Margherita",
            ingredients: "Tomato and mozarella",
            price: 10,
            photoName: "margherita.jpg",
            soldOut: false,
        },
        {
            name: "Pizza Spinaci",
            ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
            price: 12,
            photoName: "spinaci.jpg",
            soldOut: false,
        },
        {
            name: "Pizza Funghi",
            ingredients: "Tomato, mozarella, mushrooms, and onion",
            price: 12,
            photoName: "funghi.jpg",
            soldOut: false,
        },
        {
            name: "Pizza Salamino",
            ingredients: "Tomato, mozarella, and pepperoni",
            price: 15,
            photoName: "salamino.jpg",
            soldOut: true,
        },
        {
            name: "Pizza Prosciutto",
            ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
            price: 18,
            photoName: "prosciutto.jpg",
            soldOut: false,
        },
    ];
    return (
        <>
            <div className='pizza'>
                {
                    pizzaData.map((p, index) => {
                        return <div className='pizza-element' key={index}>
                            <img src={'../images/' + p.photoName} className='img' />
                            <div className="pizza-details">
                                <p>Name: {p.name}</p>
                                <p>Price: {p.price}</p>
                                <p>Ingredients: {p.ingredients}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}
