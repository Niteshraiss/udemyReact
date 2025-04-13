import React, { useState } from 'react'

export const AccordianItem = ({ num, title, text }) => {
    const [isOpen, setIsOpen] = useState(false)
    function openAccordian() {
        setIsOpen(pre => !pre)
    }
    return (
        <>
            <div className={isOpen ?"open item" :"item"} onClick={openAccordian}>
                <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
                <p className='title'>{title}</p>
                <p className='icon'>{isOpen ? '-' : '+'}</p>
                {isOpen && (
                    <div className="content-box">
                        {text}
                    </div>
                )
                }
            </div>
        </>
    )
}
