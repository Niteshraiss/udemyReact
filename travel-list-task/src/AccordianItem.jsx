import React, { useState } from 'react'

export const AccordianItem = ({ num, title, open,onOpen,children }) => {
    // const [isOpen, setIsOpen] = useState(false)
    const isOpen= num ==open
    function openAccordian() {
       onOpen(isOpen ? null :num)
    }
    return (
        <>
            <div className={isOpen ?"open item" :"item"} onClick={openAccordian}>
                <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
                <p className='title'>{title}</p>
                <p className='icon'>{isOpen ? '-' : '+'}</p>
                {isOpen && (
                    <div className="content-box">
                        {children}
                    </div>
                )
                }
            </div>
        </>
    )
}
