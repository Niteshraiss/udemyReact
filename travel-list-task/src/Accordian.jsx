import React, { useState } from 'react'
import { AccordianItem } from './AccordianItem'

export const Accordian = ({ data }) => {
    const [curOpen, setCurOpen] = useState(null)
    return (
        <>
            <div className='accordion'>
                {
                    data.map((e, index) =>
                        <AccordianItem open={curOpen} onOpen={setCurOpen} title={e.title} num={index} key={index}>
                            {e.text}
                        </AccordianItem>
                    )
                }
            </div>
        </>
    )
}
