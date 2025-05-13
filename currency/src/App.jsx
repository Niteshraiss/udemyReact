import { useEffect, useState } from 'react'
import './App.css'
import Input from './Input'

function App() {
  const [currency, setCurrency] = useState(0)
  const [country, setCountry] = useState("INR")
  const [country2, setCountry2] = useState("USD")
  const [convertedAmount, setConvertedAmount] = useState(0)

  useEffect(function () {
    async function convert() {
      try {
        if (!currency || isNaN(currency)) {
          setConvertedAmount(0)
          return
        }
        const res = await fetch(`https://api.frankfurter.dev/v1/latest?base=${country}&symbols=${country2}`)
        if (!res.ok) throw new Error("Something went wrong ")
        const data = await res.json()
        const amount = (currency * data.rates[country2]).toFixed(2);
        setConvertedAmount(amount);
      } catch (err) {
        console.log(err)
      }
    }
    convert()
  }, [currency, country, country2])
  return (
    <>
      <div className="main">
        <h1>Currency Converter</h1>
        <div className="flex">
          <input
            type="text"
            name=""
            id="currency"
            placeholder='Currency'
            className="input"
            step="any"
            value={currency}
            onChange={(e) => {
              const value = e.target.value;
              setCurrency(value === '' ? '' : parseFloat(value));
            }}
          />
          <Input>
            <select
              name="country"
              id="country"
              className='input'

              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
              <option value="CAD">CAD</option>
            </select>
          </Input>
          <Input>
            <select name="country" id="country2" className='input'
              value={country2}
              onChange={(e) => setCountry2(e.target.value)}>
              <option value="INR" >INR</option>
              <option value="CAD">CAD</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </Input>
        </div>

        {currency ?
          <p>
            {currency} {country} is equals to {convertedAmount} {country2} 👍
          </p>
          :
          <p> Total 💵 is 0 😥 </p>
        }

      </div>
    </>
  )
}

export default App
