import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)


	return (
		<div>
			<h1 className="text-4xl font-medium text-center my-10">Counter: {count}</h1>

			<div className="flex flex-row justify-around">

			<button onClick={() => setCount(count + 1)} className="p-2 border-none bg-teal-400 rounded-full w-20 h-auto font-medium text-4xl">+</button>

			<button onClick={() => setCount(0)} className="p-4 border-none bg-teal-400 rounded-full w-fit h-auto font-medium text-4xl">reset</button>

			<button onClick={() => setCount(count - 1)} className="p-2 border-none bg-teal-400 rounded-full w-20 h-auto font-medium text-4xl">-</button>

    	</div>
		</div>
		
	)
}

export default Counter