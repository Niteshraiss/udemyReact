import React, { useState } from 'react'
import Bill from './Bill'
import Button from './Button'
import Total from './Total'
import Service from './Service'
const BillingSection = () => {
    const [bill, setBill] = useState("")
    const [service1, setService1] = useState(0)
    const [service2, setService2] = useState(0)
    function resetData() {
        setBill("")
        setService1(0)
        setService2(0)
    }
    const tip = bill * ((service1 + service2) / 2 / 100)
    return (
        <div className="flex">
            <Bill bill={bill} setBill={setBill} />
            <Service service={service1} onSelect={setService1}>
                How did you like the service ?
            </Service>
            <Service service={service2} onSelect={setService2}>
                How did your friend like the service ?
            </Service>

            {bill > 0 &&
                <div>
                    <Total bill={bill} tip={tip} />
                    <Button onClick={resetData} />
                </div>
            }
        </div>
    )
}

export default BillingSection