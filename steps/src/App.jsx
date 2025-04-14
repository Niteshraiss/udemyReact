import { useState } from 'react'
import './App.css'
import { Buttons } from './Buttons'
import { StepMessage } from './StepMessage'
function App() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function handlePrevious() {
    if (step > 1) setStep(prev => prev - 1);

  }
  function handleNext() {
    if (step < 3)
      setStep(prev => prev + 1)

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

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Buttons bgColor='#e7e7ef' textColor='#333' onClick={() => alert(`Let's talk about ${messages[step - 1]}`)} >
                Learn More
              </Buttons>
            </div>
          </StepMessage>
          <div className="buttons">
            {/* using children prop */}
            <Buttons bgColor='#7950f2' textColor='#fff' onClick={handlePrevious} ><span>⏮</span> Previous</Buttons>
            <Buttons bgColor='#7950f2' textColor='#fff' onClick={handleNext}>Next <span>⏭ </span></Buttons>
          </div>
        </div>
      )}
    </>
  )
}

export default App
