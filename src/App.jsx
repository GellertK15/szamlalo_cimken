import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <button
        className="kattintas"
        title={`Kattintások száma: ${count}`}
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
    </div>
  )
}

export default App
