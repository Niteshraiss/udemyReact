import React from 'react'

export const Stats = ({ items }) => {
    if (!items.length) return <p className='stats'><em>Start adding some items to your packing list 🧸🧸</em></p>
    const newItems = items.length;
    const numPacked = items.filter((item) => item.packed).length
    const percentage = Math.round(numPacked / newItems * 100)
    return (
        <>
            <footer className='stats'>
                <em>
                    {percentage === 100 ? "You got everything! Ready to go ✈" :
                        `💼 You have ${newItems} item on your List and you already packed ${numPacked} (${percentage}%)`
                    }
                </em>
            </footer>
        </>
    )
}
