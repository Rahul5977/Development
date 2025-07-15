import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increaseCount = () => {
    setCount(count + 1)
  }
  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={() => increaseCount()}>
      Increase Count
    </button>
    <button onClick={() => setCount(0)}>
      Reset Count
    </button>
    <button onClick={() => setCount(count - 1)}>
      Decrease Count
    </button>
   
      
    </>
  )
}

export default App
