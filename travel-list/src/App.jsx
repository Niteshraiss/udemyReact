import { useState } from 'react'
import { Form } from './components/Form'
import { PackingList } from './components/PackingList'
import { Stats } from './components/Stats.jsx'

function App() {
  const [items, setItems] = useState([]);

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id))
  }
  function handleAddItems(item) {
    setItems(pre => [...pre, item]);
  }
  function handleToogleItem(id) {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }
  function clearAll() {
    if (items.length > 0) {
      const confirmed = window.confirm("Are you sure you want to delete all items?");
      if (confirmed) setItems([]);
    } else {
      alert("Nothing to delete")
    }
  }
  return (
    <>
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToogleItems={handleToogleItem} onClear={clearAll} />
      <Stats items={items} />
    </>
  )
}

export default App
