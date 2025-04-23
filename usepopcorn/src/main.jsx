import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Star from './Star/StarRating'
import StarRating from './Star/StarRating'
import Test from './Star/Test'
import TextExpander from './Task/TextExpander'
import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Test/>
    <StarRating maxRating={"hey"} messages={['Terible','Bad','Okay','Good','Amazing']}/>
    <StarRating maxRating={24} color='red' className="text" defaultRating={1} /> */}
    
    
    {/* Task  */}
    <TextExpander/>
  </StrictMode>,
)
