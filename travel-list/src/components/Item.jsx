import React from 'react'

export const Item = ({ item }, index) => {
    return (
        <>
            <li key={index}>
                <span style={item.packed ? {textDecoration:'line-through'} :{}}>{item.description} {item.quantity} </span>
                <button>❌</button>
            </li>
        </>
    )
}
