import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col ">

      <h1 className="text-4xl font-medium text-center my-10">Counter: {count}</h1>

      <div className="flex flex-row justify-around">

        <button onClick={() => setCount(count + 1)} className="p-2 border-2">+</button>

        <button onClick={() => setCount(0)} className="p-2 border-2">reset</button>

        <button onClick={() => setCount(count - 1)} className="p-2 border-2">-</button>

      </div>
    </div>
    
  )
}

export default App
