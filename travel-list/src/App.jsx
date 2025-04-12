import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Form } from './components/Form'
import { PackingList } from './components/PackingList'

function App() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 1, packed: true },
    { id: 4, description: "Laptop", quantity: 1, packed: false },
    { id: 5, description: "Dress", quantity: 1, packed: false },
  ];
  return (
    <>
      <Form />
      <PackingList item={initialItems} />
    </>
  )
}

export default App
