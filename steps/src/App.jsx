import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function handlePrevious() {
    if (step > 1) setStep(prev => prev - 1);
    console.log(step)
  }
  function handleNext() {
    if (step < 3)
      setStep(prev => prev + 1)
    console.log(step)
  }
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];
  return (
    <>
      <button className="close" onClick={() => {
        setIsOpen(pre => !pre)
      }}>&times;</button>
      {isOpen && (//if true return it expression
        <div className='steps'>
          <div className="numbers">
            <div className={step == 1 ? 'active' : ''}>1</div>
            <div className={step == 2 ? 'active' : ''}>2</div>
            <div className={step == 3 ? 'active' : ''}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={() => { handlePrevious() }}>
              Previous
            </button>
            <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={() => { handleNext() }}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
