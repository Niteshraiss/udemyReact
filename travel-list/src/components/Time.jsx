import React, { useState } from 'react'

const Time = () => {
    const [step, setStep] = useState(1)
    const [count, setCount] = useState(0)

    const date = new Date("April 10 2025")
    date.setDate(date.getDate() + count)


    const countIncrease = () => {
        setCount(pre => pre + step)
    }
    const countDecrease = () => {
        setCount(pre => pre - step)
    }
    const handleReset = () => {
        setCount(pre => 0)
        setStep(pre => 1)
    }
    return (
        <>
            <div className="steps">
                {/* control elements */}
                <input type="range" min="0" max="10" value={step} onChange={e => setStep(Number(e.target.value))} />
                <span>Step: {step}</span>

                <div className="buttons mt-2">
                    <button onClick={countIncrease}>+</button>
                    <input type="text" value={count} onChange={e => setCount(Number(e.target.value))} />
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
                {(count != 0 || step > 1 )?
                    <button onClick={handleReset}>Reset</button>
                    : ""
                }

            </div>
        </>
    )
}

export default Time