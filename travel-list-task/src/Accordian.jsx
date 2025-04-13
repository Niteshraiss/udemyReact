import React from 'react'
import { AccordianItem } from './AccordianItem'

export const Accordian = ({data}) => {

    return (
        <>
            <div className='accordion'>
                {
                    data.map((e,index) =>
                       <AccordianItem title={e.title} text={e.text} num={index} key={index}/>
                    )
                }
            </div>
        </>
    )
}
