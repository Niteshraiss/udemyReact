import React from 'react'
import { Pizza } from './Pizza'

const Menu = () => {
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
    const pizzas = pizzaData;
    const numPizzas = pizzaData.length;
    return (

        <div className='menu'>
            <h1>Our Menu</h1>

            {numPizzas > 0 ? (
                <>
                    <p>
                        Nestled in the heart of the city, this pizza restaurant offers an authentic Italian dining
                        experience that transports guests straight to Naples. The menu boasts a
                        variety of handcrafted pizzas, each prepared with freshly made dough and topped with
                        high-quality ingredients, ensuring a perfect blend of flavors in every bite.
                    </p>
                    <div className='pizza'>

                        {
                            pizzas.map((pizza, index) => {
                                return <Pizza key={index} pizza={pizza} />
                            })
                        }
                    </div>
                </>
            ) : <p>We're preparing things for you hold your horses!</p>}
        </div>


    )
}

export default Menu