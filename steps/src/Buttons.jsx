import React from 'react'

export const Buttons = ({ textColor, bgColor, onClick, children}) => {
    return (
        <>
            <button style={{ backgroundColor: bgColor, color: textColor }} onClick={() => { onClick() }}>
               {children}
            </button>
        </>
    )
}
