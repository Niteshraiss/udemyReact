import React from 'react'

const Service = ({onSelect,service,children}) => {
    return (
        <>
            <div className="from item">
                <label>{children}</label>
                <select value={service} onChange={(e)=>onSelect(Number(e.target.value))}>
                    <option value="0">Dissatified (0%)</option>
                    <option value="5">It was okay (5%)</option>
                    <option value="10">It was good (10%)</option>
                    <option value="20">Absolutely Amazing (20%)</option>
                </select>
            </div>
        </>
    )
}

export default Service