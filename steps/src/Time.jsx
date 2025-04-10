import React, { useState } from 'react'

const Time = () => {
    const [step, setStep] = useState(1)
    const [count, setCount] = useState(0)

    const date=new Date("April 10 2025")
    date.setDate(date.getDate() + count)

    const stepIncrease = () => {
        setStep(pre => pre +  1)
    }
    const stepdecrease = () => {
        if (step > 1) setStep(pre => pre - 1)
    }
    const countIncrease = () => {
        setCount(pre => pre + step)
    }
    const countDecrease = () => {
        setCount(pre => pre - step)
    }
    return (
        <>
            <div className="steps">
                <div className="buttons mt-2">
                    <button onClick={stepIncrease}>+</button>
                    <span>Step: {step}</span>
                    <button onClick={stepdecrease}>-</button>
                </div>
                <div className="buttons mt-2">
                    <button onClick={countIncrease}>+</button>
                    <span>Count: {count}</span>
                    <button onClick={countDecrease}>-</button>
                </div>
                <p className="message">
                    <span>
                        {
                            count === 0 ?
                                'Today is'
                                : count > 0
                                    ? `${count} day from today is `
                                    : `${Math.abs(count)} days ago was `
                        }
                    </span>
                    <span>
                        {date.toDateString()}
                    </span>
                </p>
            </div>
        </>
    )
}

export default Time