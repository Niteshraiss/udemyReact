import React from 'react'

export const Item = ({ item, onDeleteItem,onToogleItems }) => {
    return (
        <>
            <li>
                <input type="checkbox" value={item.packed} onChange={()=>{onToogleItems(item.id)}} />
                <span style={item.packed ? { textDecoration: 'line-through' } : {}}>{item.quantity}  {item.desc}  </span>
                <button onClick={() => onDeleteItem(item.id)}>❌</button>
            </li>
        </>
    )
}
